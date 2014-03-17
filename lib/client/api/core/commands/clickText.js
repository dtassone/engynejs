module.exports = {
    name:"clickText",
    fn: function(text){
        var that = this;
        this._flow.execute(function(){
            that.selectText(text).click();
        });
    }
};