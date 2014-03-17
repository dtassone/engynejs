    var Builder = require("./builder")
        , client;

    ClientFactory = function() {};

    ClientFactory.prototype.setDriver = function(driver) {
        this.driver = driver;
        return this;
    };
    ClientFactory.prototype.setConfig = function(config) {
        this.config = config;
        return this;
    };
    ClientFactory.prototype.getBuilder = function(){
        if(!this.builder) {
            this.builder = new Builder(this.driver);
        }
        return this.builder;
    };

    ClientFactory.prototype.getInstance = function(){
        if(!client){
           return this.newInstance();
        }
        return client;
    };

    ClientFactory.prototype.newInstance = function(){
        client = this.getBuilder().build();
        if(!!this.config){
            client.setConfig(this.config);
        }
        return client;
    };

    ClientFactory.prototype.newClient = ClientFactory.prototype.newInstance;
    ClientFactory.prototype.getClient = ClientFactory.prototype.getInstance;




exports.factory = new ClientFactory();