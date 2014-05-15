module.exports = {
    name:["attribute","attr"],
    fn: function(name){
        var that = this
            , el =  this._flag("element");

        return el.getAttribute(name).then(function(value){
            that._flag("actual", value);
        });
    }
};
