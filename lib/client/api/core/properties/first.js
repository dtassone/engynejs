module.exports = {
    name: "first",
    fn: function(){
        var that = this;
        this._flow.execute(function(){
            that.index(0);
        });
    }
};