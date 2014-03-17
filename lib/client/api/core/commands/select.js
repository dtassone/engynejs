var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name:"select",
    fn: function(selector){
        if(!selector){
            throw "selector is required";
        }
        var that = this,
            el = this._flag("element");

        return el.findElement(By.css(selector)).then(function(subEl){
            that._flag("element", subEl);
            return subEl;
        });
    }
};