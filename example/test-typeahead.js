var page = require("../lib/client/factory").factory.newInstance();

page.addCommand("login", function(username, password){
    return page.open("http://ssologin-uat.fm.rbsgrp.net/ManualLogon/Logon.aspx?app=Research&returnUrl=")
        .wait('#LogonView_txtUserName')
            .click("#LogonView_txtUserName")
            .type(username)
            .click("#LogonView_btnSetUser")
            .wait('#LogonView_txtPassword', 15000)
            .element('#LogonView_txtPassword')
            .type(password)
            .click("#LogonView_btnLogon");
});

page.addCommand("typeaheadListBox", function(cssSelector){
    return page.element(cssSelector + " + .dropdown-menu");
});

page.addCommand("typeaheadListItems", function(cssSelector){
    return page.elements(cssSelector + " + .dropdown-menu li a");
});

describe('Market Rates App', function() {
    this.timeout(150000);


    after(function (done) {
        page.close()
            .then(done);
    });

    before(function(done){
        page.login("zexec.test3", "Zexec.test31")
            .then(done);
    });

    beforeEach(function(done){
        page.open("http://lonmw20188.fm.rbsgrp.net:8123/applications/platform/shell/index.html?debug=true#/execution/exec-market-rates-app")
            .wait('input.instrument-selector-search')
            .click('input.instrument-selector-search')
            .title.should.equal("Market Rates - Agile Markets - RBS")
            .then(done);
    });

    it("should focus on the ccypair control after loading", function(done){
        page.activeElement.cssClass.should.contains('instrument-selector-search')
            .then(done);
    });

    describe('ccypair typeahead', function() {

        it("should display the typeahead list", function(done){
            page.activeElement.type("GBP")
                .typeaheadListItems("[ccy-pair-input]").first.text.startWith("GBP")
                .and.last.text.endsWith("AOA")
                .then(done);
        });

        it("list should allow keyboard navigation", function(done){
            page.activeElement.type("GBP")
                .pressKey("down")
                .pressKey("down")
                .typeaheadListBox("[ccy-pair-input]").select(".active").text.should.equal("GBPALL")
                .and.activeElement.pressKey("up")
                .typeaheadListBox("[ccy-pair-input]").select(".active").text.should.equal("GBPAFN")
                .then(done);
        });

        it("list should allow selection with tab", function(done){
            page.activeElement.type("GBP")
                .screenshot("capture error2")
                .pressKey("tab")
                .cssClass.should.contains("btn-swap")
                .and.element("[ccy-pair-input]").value.should.equal("GBPAED")
                .then(done);
        });

        it("list should allow selection with enter", function(done){
            page.activeElement.type("GBP")
                .pressKey("ENTER")
                .activeElement.value.should.equal("GBPAEY")
                .then(done);
        });
    });
});

