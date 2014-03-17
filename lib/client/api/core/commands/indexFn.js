module.exports = {
    name: "index",
    fn: function(i){
        if(isNaN(i)){
            throw "arg[0] in index() should be a number";
        }

        var elements = this._flag("elements");
        if(i >= elements.length){
            throw "Element " + i + " is out of range" ;
        }

        this._flag("element", elements[i]);
        return elements[i];
    }
};