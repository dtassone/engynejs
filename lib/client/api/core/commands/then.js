module.exports = {
    name: "then"
    , fn: function(callback){
        var elt = this._flag("element")
            , elts = this._flag("elements")
            , global = this._flag("global")
            , actual = this._flag("actual");

        return callback(global, elt, elts, actual);
    }
};