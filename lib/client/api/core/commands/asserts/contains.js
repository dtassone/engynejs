var assert = require('chai').assert;

module.exports = {
    name: ["contains", "contain", "include"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        this._flag("negate", false);

        assert[not ? "notInclude" : "include"](actual, expectedValue);
    }
};
