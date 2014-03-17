module.exports = {
    name: "activeElement",
    fn: function(){
        var that = this;
        return this._driver.getActiveElement().then(function(el){
            that._flag("element", el);
            return el;
        });
    }
};