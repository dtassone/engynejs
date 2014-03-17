module.exports = {
    name:"text",
    fn: function(){
        var that = this
            , el =  this._flag("element");

        return el.getText().then(function(value){
            that._flag("text", value);
            that._flag("actual", value);
        });
    }
};