var page = require("./factory").factory.getInstance();

describe('Google', function() {
    this.timeout(150000);

    after(function (done) {
        page.close()
            .then(done);
    });

    beforeEach(function(done){
        page.open("http://google.com")
            .then(done);
    });

    it("should trigger a search by pressing Enter", function(done){
        page.activeElement.type('phantom')
            .pressKey("enter")
            .then(done);
    });


});

