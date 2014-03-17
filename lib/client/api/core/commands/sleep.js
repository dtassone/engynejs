module.exports = {
    name: ["sleep", "pause"],
    fn: function(value){
        return this._driver.sleep(value);
    }
};