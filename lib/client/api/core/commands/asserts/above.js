var assert = require('chai').assert;


module.exports = {
    name: ["above"],
    fn: function(expectedValue){
        var actual  = this._flag("actual");
        var not = this._flag("negate");
        if(!!not){
            this._flag("negate", false);
            return this.most(expectedValue);
        }

        assert(actual > expectedValue
            , 'expected ' + actual + ' to be above' + expectedValue
            , 'expected ' + actual + ' to not be above' + expectedValue
        );
        this._flag("expect", false);
    }
};
