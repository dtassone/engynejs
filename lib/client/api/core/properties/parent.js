var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name: "parent",
    fn: function(){
        var el = this._flag("element")
            , parent = el.findElement(By.xpath(".."));

        this._flag("element", parent);
        return parent;
    }
};