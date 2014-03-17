var assert = require('chai').assert;


module.exports = {
    name: ["equal", "be"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        if(!actual) {
            throw "No actual value found! Did you forget an \"expect\" in the chain?";
        }
        if(Array.isArray(expectedValue) && typeof actual === "string"){
            expectedValue = expectedValue.join("\n");
        }
        assert(actual === expectedValue
            , 'expected ' + actual + ' to equal ' + expectedValue
            , 'expected ' + actual + ' not equal ' + expectedValue
        );
        this._flag("expect", false);
    }
};