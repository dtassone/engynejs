var webdriver = require('selenium-webdriver')
    , extensions = require('./extensions');

webdriver.WebDriver.installExtension = function(name, fn){
    webdriver.WebDriver.prototype[name] = fn;
};

for(var name in extensions){
    if(extensions.hasOwnProperty(name)){
        webdriver.WebDriver.installExtension(name, extensions[name]);
    }
}

module.exports = webdriver;