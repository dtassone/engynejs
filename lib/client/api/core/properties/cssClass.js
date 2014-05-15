module.exports = {
    name:"cssClass",
    fn: function(){
        var that = this;
        this._flow.execute(function(){
            that.attribute("class");
        });
    }
};
