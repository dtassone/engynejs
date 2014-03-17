var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

function Server(opts){
    this.server = new SeleniumServer(opts.seleniumJarPath, {
        port: opts.seleniumPort
        , args: opts.args || []
    });

    return this.server;
}


module.exports = Server;
