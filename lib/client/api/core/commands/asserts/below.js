var assert = require('chai').assert;


module.exports = {
    name: ["below"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        if(!!not){
            this._flag("negate", false);
            return this.least(expectedValue);
        }

        assert(actual < expectedValue
            , 'expected ' + actual + ' to be below' + expectedValue
            , 'expected ' + actual + ' to not be below' + expectedValue
        );
        this._flag("expect", false);
    }
};
