var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name: "element",
    fn: function(cssSelector){
        var that = this;
        return this._driver.findElement(By.css(cssSelector)).then(function(el){
            that._flag("element", el);
            return el;
        });
    }
};