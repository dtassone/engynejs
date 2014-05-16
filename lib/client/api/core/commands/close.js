module.exports = {
    name: "close",
    fn: function(callback){
        var that = this;
        return this._driver.close().then(function(){
            return that._driver.quit().then(callback);
        });
    }
};
