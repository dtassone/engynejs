
module.exports = {
    name: "open",
    fn: function(url){
        return this._driver.get(url);
    }
};