var assert = require('chai').assert;


module.exports = {
    name: ["equal"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        this._flag("negate", false);

        if(Array.isArray(expectedValue) && typeof actual === "string"){
            expectedValue = expectedValue.join("\n");
        }
        assert[not ? "notStrictEqual" : "strictEqual"](actual, expectedValue);
    }
};
