var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var fs = require('fs');

function Server(opts){
    if (!fs.existsSync(opts.seleniumJarPath)) {
       throw Error(opts.seleniumJarPath + " does not exist!");
    }

    this.server = new SeleniumServer(opts.seleniumJarPath, {
        port: opts.seleniumPort
        , args: opts.args || []
    });

    return this.server;
}


module.exports = Server;
