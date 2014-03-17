module.exports = {
    name: "last",
    fn: function(){
        var that = this;
        if(!this._flag("elements")){
            throw "no collection stored in elements flag!";
        }
        this._flow.execute(function(){
            that.index(that._flag("elements").length-1);
        });

    }
};