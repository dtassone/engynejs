module.exports = {
    name: "close",
    fn: function(callback){
        return this._driver.quit().then(callback);
    }
};