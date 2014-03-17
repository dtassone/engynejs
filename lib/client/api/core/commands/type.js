module.exports = {
    name: "type",
    fn: function(text){
        var that = this
            , el =  this._flag("element");

        if(!el){
            this._flow.execute(function(){
                that.activeElement.type(text);
            });
        }else{
            el.sendKeys(text);
        }
    }
};
