var webdriver = require('../../../../webdriver/webdriver-extended')
    , By = webdriver.By;

module.exports = {
    name:"click",
    fn: function(selector){
        var that = this;
        if(!selector){
            return this._flag("element").click();
        }

        return this._driver.findElement(By.css(selector)).then(function(el){
            that._flag("element", el);
            el.click();
            return el;
        });
    }
};
