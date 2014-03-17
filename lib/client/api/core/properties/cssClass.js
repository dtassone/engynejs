module.exports = {
    name:"cssClass",
    fn: function(){
        var that = this
            , el =  this._flag("element");

        return el.getAttribute("class").then(function(value){
            that._flag("cssClass", value);
            that._flag("actual", value);
        });
    }
};