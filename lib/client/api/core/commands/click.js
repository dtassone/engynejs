var webdriver = require('../../../../webdriver/webdriver-extended')
    , By = webdriver.By;

module.exports = {
    name:"click",
    fn: function(selector){
        if(!selector){
            return this._flag("element").click();
        }

        return this._driver.findElement(By.css(selector)).click();
    }
};