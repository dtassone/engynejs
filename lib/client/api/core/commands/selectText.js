var By = require('../../../../webdriver/webdriver-extended').By;

module.exports = {
    name:"selectText",
    fn: function(text){
        if(!text){
            throw "text is required";
        }
        var that = this,
            el = this._flag("element");
        
        if(!el){
            throw Error("No element found");
        }
        
        return el.findElement(By.xpath("//*[text()[contains(.,'" + text +"')]]")).then(function(subEl){
            that._flag("element", subEl);
            return subEl;
        });
    }
};
