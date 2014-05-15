module.exports = {
    name:"isEnabled",
    fn: function(){
        var that = this
            , el =  this._flag("element");

        return el.isEnabled().then(function(value){
            that._flag("actual", value);
        });
    }
};
