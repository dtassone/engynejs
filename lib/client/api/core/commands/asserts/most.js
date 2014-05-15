var assert = require('chai').assert;


module.exports = {
    name: ["most"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        if(!!not){
            this._flag("negate", false);
            return this.above(expectedValue);
        }

        assert(actual <= expectedValue
            , 'expected ' + actual + ' to be at most ' + expectedValue
            , 'expected ' + actual + ' to not be at most ' + expectedValue
        );
        this._flag("expect", false);
    }
};
