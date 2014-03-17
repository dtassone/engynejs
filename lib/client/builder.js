var Client = require("./client");
var commands =  require("./api/core").commands;
var properties =  require("./api/core").properties;

function ClientBuilder(driver){
    this._driver = driver;
}

ClientBuilder.prototype.build = function(){
    var client = new Client(this._driver);

    var commandArray = Object.keys(commands).map(function(name){
        return commands[name];
    });
    var propertiesArray = Object.keys(properties).map(function(name){
        return properties[name];
    });

    client.addChainableMethods(commandArray);
    client.addProperties(propertiesArray);

    return client;
};

module.exports = ClientBuilder;