module.exports = {
    name:"title",
    fn: function(){
        var that = this;
        return this._driver.getTitle().then(function(value){
            that._flag("actual", value);
        });
    }
};