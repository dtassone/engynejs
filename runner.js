var webdriver = require('./lib/webdriver/webdriver-extended')
    , properties = require('./config/properties.json')
    , extend = require("./lib/utils/extend").extend;

function Runner(opts, tests){
    if(!(this instanceof Runner)){
        return new Runner(opts, tests);
    }

    opts = extend(properties, opts);

    this.server = null;
    this.driver = null;
    this._startSeleniumServer(opts);
    this._buildDriver(opts);

    var page = require("./lib/client/factory").factory.setDriver(this.driver).setConfig(opts).getInstance();

    if(opts.screenshotFailedTest){
        page.includeScreenshotOnTestFailed();
    }

    this.loadTests(tests);

    return this;
}
Runner.prototype._startSeleniumServer = function(opts){
    var Server;

    if(opts.browser === "phantomjs"){
        Server = require("./lib/selenium/phantomServer");
    }
    else{
        Server = require("./lib/selenium/server");
    }

    this.server = new Server(opts);
    this.server.start();

    return this;
};

Runner.prototype._buildDriver = function(opts){
    var capabilities = webdriver.Capabilities[opts.browser]();

    this.driver = new webdriver.Builder().
        usingServer(this.server.address()).
        withCapabilities(capabilities).
        build();

    this.driver.manage().window().maximize();
};

Runner.prototype.loadTests = function(tests){
    if(!tests || tests.length === 0){
       return;
    }

    if(Array.isArray(tests)){
        tests.map(function(test){
           return require(test);
        });
    }
    else{
        require(tests);
    }

    return this;
};

Runner.setConfig = function(conf){
    return Runner(conf);
};

module.exports = Runner;
