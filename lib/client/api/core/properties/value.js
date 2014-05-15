module.exports = {
    name:"value",
    fn: function(){
        var that = this;
        this._flow.execute(function(){
            that.attribute("value");
        });
    }
};
