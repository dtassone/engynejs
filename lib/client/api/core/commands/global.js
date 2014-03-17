module.exports = {
    name: "global",
    fn: function(name){
        var that = this;
        return this._driver.getGlobal(name).then(function(obj){
            that._flag("global", obj);
            return obj;
        });
    }
};