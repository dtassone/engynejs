module.exports = {
    name:"hover",
    fn: function(){
        var el  = this._flag("element");
        return this._driver.actions().mouseMove(el).perform();
    }
};