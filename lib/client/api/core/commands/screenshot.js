var fs = require('fs');
var mkdirp = require('mkdirp');

module.exports = {
    name: "screenshot",
    fn: function(title){
        var that = this;
        return this._driver.takeScreenshot()
                    .then(function(buffer) {
                        _writeScreenshot.call(that, title, buffer);
                    });
    }
};


function _writeScreenshot(title, buffer) {
    if(!this._config.screenshotsDirectory){
        throw "_config.screenshotsDirectory not found in client object";
    }

    var screenshotDir = this._config.screenshotsDirectory;

    var fileName = ((new Date()).toISOString() + ' - ' + title + '.png').replace(/:/g,'-').replace(/-+/g, '-');

    mkdirp.sync(screenshotDir);
    fs.writeFileSync(screenshotDir + fileName, new Buffer(buffer, 'base64'));
    console.log('Screenshot taken ' + fileName );
}