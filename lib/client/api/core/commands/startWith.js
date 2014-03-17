var assert = require('chai').assert;

module.exports = {
    name: ["startWith", "startsWith"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        if(!actual) {
            throw "No actual value found! Did you forget an \"expect\" in the chain?";
        }

        var expectedRegex = new RegExp("^"+expectedValue, "g");
        assert( actual.match(expectedRegex)!== null
            , 'expected ' + actual + ' to startWith ' + expectedValue
            , 'expected ' + actual + ' not startWith ' + expectedValue
        );
        this._flag("expect", false);
    }
};