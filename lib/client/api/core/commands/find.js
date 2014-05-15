var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name:"find",
    fn: function(selector){
        if(!selector){
            throw "selector is required";
        }
        var that = this,
            el = this._flag("element");

        return el.findElements(By.css(selector)).then(function(subElts){
            that._flag("elements", subElts);
            return subElts;
        });
    }
};
