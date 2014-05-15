var WEB_DRIVER_PORT = 8088;

var SeleniumServer = require("./server")
    , spawn = require('child_process').spawn
    , fs = require('fs');


function PhantomServer(opts){
    this.ghostDriverProcess = null;
    this.options = opts;

    if (!fs.existsSync(opts.phantomExecutable)) {
        throw Error(opts.phantomExecutable + " does not exist!");
    }

    this.seleniumServer = new SeleniumServer({
        seleniumPort: opts.seleniumPort
        , seleniumJarPath: opts.seleniumJarPath
        , args: ["-role", "hub"]
    });
}

PhantomServer.prototype.start = function(){
    var driverOpts = ["--webdriver=" + WEB_DRIVER_PORT, "--webdriver-selenium-grid-hub=http://127.0.0.1:" + this.options.seleniumPort + "/"];

    this.seleniumServer.start();
    this.ghostDriverProcess = spawn(this.options.phantomExecutable, driverOpts);
    this._bindOutput();
    this._bindExitCleanup();

    return this;
};

PhantomServer.prototype.address = function(){
    return "http://127.0.0.1:" + WEB_DRIVER_PORT + "/wd/hub";
};

PhantomServer.prototype._bindOutput = function(){
    this.ghostDriverProcess.stdout.on('data', function(data) {
        console.log("phantom: ", data.toString());
    });
    this.ghostDriverProcess.stderr.on('data', function(data) {
        console.log("phantom error: ", data.toString());
    });
};

PhantomServer.prototype._bindExitCleanup = function(){
    process.once('exit',this._killGhostDriverProcess.bind(this));
};

PhantomServer.prototype._killGhostDriverProcess = function(){
    process.removeListener('exit', this._killGhostDriverProcess);
    if(this.ghostDriverProcess){
        this.ghostDriverProcess.kill('SIGTERM');
    }
};

module.exports = PhantomServer;
