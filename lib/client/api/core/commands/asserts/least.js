var assert = require('chai').assert;


module.exports = {
    name: ["least"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        if(!!not){
            this._flag("negate", false);
            return this.below(expectedValue);
        }

        assert(actual >= expectedValue
            , 'expected ' + actual + ' to be at least ' + expectedValue
            , 'expected ' + actual + ' to not be at least ' + expectedValue
        );
        this._flag("expect", false);
    }
};
