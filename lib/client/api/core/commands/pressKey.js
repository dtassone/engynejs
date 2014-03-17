var webdriver = require('../../../../webdriver/webdriver-extended');

module.exports = {
    name: "pressKey",
    fn: function(key){
        var that = this
            , el =  this._flag("element");

        if(!el){
            this._flow.execute(function(){
                that.activeElement.pressKey(key);
            });
        }else{
            el.sendKeys(webdriver.Key[key.toUpperCase()]);
            //Refresh active element
            this._flow.execute(function(){
                that.activeElement;
            });
        }
    }
};