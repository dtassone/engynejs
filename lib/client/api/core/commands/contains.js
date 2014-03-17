var assert = require('chai').assert;

module.exports = {
    name: ["contains", "contain", "include"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        if(!actual) {
            throw "No actual value found! Did you forget an \"expect\" in the chain?";
        }

        assert(~actual.indexOf(expectedValue)
            , 'expected ' + actual + ' to contain ' + expectedValue
            , 'expected ' + actual + ' not contain ' + expectedValue
        );
        this._flag("expect", false);
    }
};