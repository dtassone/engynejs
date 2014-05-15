var assert = require('chai').assert;

module.exports = {
    name: ["startWith", "startsWith"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        this._flag("negate", false);

        var expectedRegex = new RegExp("^"+expectedValue, "g");
        assert[not ? "notMatch" : "match"](actual, expectedRegex, 'expected "' + actual + '" to ' + (not ? "not" : '' )+' startWith "' + expectedValue + '"');
    }
};
