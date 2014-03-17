module.exports = {
    name:"value",
    fn: function(){
        var that = this
            , el =  this._flag("element");

        return el.getAttribute("value").then(function(value){
            that._flag("text", value);
            that._flag("actual", value);
        });
    }
};