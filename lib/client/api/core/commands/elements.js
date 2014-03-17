var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name: "elements",
    fn: function(cssSelector){
        var that = this;
        return this._driver.findElements(By.css(cssSelector)).then(function(elements){
            that._flag("elements", elements);
            return elements;
        });
    }
};
