var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name: "wait",
    fn: function(selector, timeout){
        var that = this;
        timeout =  timeout || 10000;
        return this._driver.wait(function () {
            return that._driver.isElementPresent(By.css(selector));
        }, timeout);
    }
};