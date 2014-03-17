module.exports = function getGlobal(name){
    return this.executeScript('return '+ name +';').then(function(global) {
        return global;
    });
};