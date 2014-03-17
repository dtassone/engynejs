module.exports = function getActiveElement(){
    return this.executeScript('return document.activeElement').then(function(el) {
        return el;
    });
};