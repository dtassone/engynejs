module.exports = {
    name: "length",
    fn: function(){
        if(!this._flag("elements"))
            return 0;

        var value = this._flag("elements").length;

        this._flag("actual", value);
        return value;
    }
};