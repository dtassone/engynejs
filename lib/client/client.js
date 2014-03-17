var webdriver = require('../webdriver/webdriver-extended')
    , util = require('chai/lib/chai/utils')
    , flag = util.flag;

function Client (driver) {
    this._driver = driver;
    this._lastAction = null;
    this._config = null;
    this._flow = webdriver.promise.controlFlow();
}
Client.prototype.setConfig = function(config){
    this._config = config;
    return this;
};

Client.prototype._flag  = function(key, value){
    if(typeof value === "undefined"){
        return flag(this, key);
    }
    flag(this, key, value);
};

Client.prototype.addToControlFlow  = function(){
    var that = this
        , enqueueFn
        , args =  Array.prototype.slice.call(arguments, 0)
        , fnArguments = args.slice(1)
        , fn = args.slice(0, 1)[0];

    enqueueFn = function(){
        return that._flow.execute(function(){
            return fn.apply(that, fnArguments);
        });
    };

    if(this._lastAction === null){
        this._lastAction = enqueueFn();
    }
    else{
        this._lastAction.then(enqueueFn);
    }
};

Client.prototype.addChainableMethods = function (methodsArray) {
    var that  = this;
    for(var i = 0; i < methodsArray.length; i++) {
        that.addChainableMethod(methodsArray[i].name, methodsArray[i].fn, methodsArray[i].behaviour);
    }
};

Client.prototype.addProperties = function (propertiesArray) {
    var that  = this;
    for(var i = 0; i < propertiesArray.length; i++) {
        that.addProperty(propertiesArray[i].name, propertiesArray[i].fn);
    }
};

Client.prototype.addChainableMethod = function (names, fn, chainingBehavior) {
    var name = Array.isArray(names) ? names[0] : names;

    util.addChainableMethod(this, name, this._wrapInControlFlow(fn), chainingBehavior);

    if(Array.isArray(names)){
        this.addAliases(name, names.slice(1));
    }
};

Client.prototype.addProperty = function (names, fn) {
    var name = Array.isArray(names) ? names[0] : names;

    util.addProperty(this, name, this._wrapInControlFlow(fn));

    if(Array.isArray(names)){
        this.addAliases(name, names.slice(1));
    }
};

Client.prototype.addCommand = function(name, fn){
    if(this[name]){
        throw "A command named \""+ name + "\" already exists in the current object";
    }
    this[name] = fn.bind(this);
};

Client.prototype.addAliases = function(name, aliases){
    var that = this;
    aliases.forEach(function(alias){
        that[alias] = that[name];
    });
};

Client.prototype._wrapInControlFlow = function(fn){
    var flowArguments,
        that = this;

    return function(){
        flowArguments =  Array.prototype.slice.call(arguments, 0);
        flowArguments.splice(0, 0, fn);
        return that.addToControlFlow.apply(that, flowArguments);
    };
};
Client.prototype.includeScreenshotOnTestFailed = function(){
   var that = this;
   return function(){
        afterEach(function (done) {
            if (this.currentTest.state === 'passed') {
                return done();
            }
            that.screenshot(this.currentTest.title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-')).then(done);
        });
    }();

};

module.exports = Client;