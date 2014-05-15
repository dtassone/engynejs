engynejs
========

Fluent api built to create acceptance tests.

It is based on selenium-webdriver and execute every tasks in the control flows.

More info https://code.google.com/p/selenium/wiki/WebDriverJs#Control_Flows

It is also using chai utils method which allows to add chainable methods or properties.

https://github.com/chaijs/chai/tree/master/lib/chai/utils

The /runner class builds the client api and start a local selenium webserver in child process.
Configuration properties available in /config.properties
All this properties are overridable by passing an object options in the Runner constructor.

##It requires the following files

- selenium-server-standalone-2.40.0.jar - http://docs.seleniumhq.org/download/
- chromedriver.exe - https://code.google.com/p/selenium/wiki/ChromeDriver
- phantomjs.exe - http://phantomjs.org/download.html


###Require the runner object
The Runner object allows to configure the selenium server and the selenium webdriver used behind the client api.

    var conf = {
        "browser" : "chrome"
        , "seleniumJarPath": "c:\\work\\zambezi\\resources\\selenium-server-standalone-2.40.0.jar"
        , "phantomExecutable": "c:\\work\\zambezi\\resources\\phantomjs.exe"
        , "screenshotFailedTest": true
    };

    require("am-webdriver/runner").setConfig(conf);

##API

###Require the client object
Get a singleton instance of the client object

    var client = require("am-webdriver").client;

####Using the factory
You can get a singleton instance

    var factory = require("am-webdriver").factory;
    var client = factory.getInstance();
    //OR
    var client = factory.getClient();

You can also get a new instance. Please note that you will need to reinstall your custom commands...

    var factory = require("am-webdriver").factory;
    var client = factory.newInstance();
    //OR
    var client = factory.newClient();


###Commands

#### click()
trigger the click event on an element.
ie.

    client.click(".my-css-selector")
    client.element(".my-css-selector").click()


#### clickText(...)
Search for argument text on the page and trigger a click on the element containing it

    client.clickText("homepage")

####close()
close the driver and the browser window

    client.close()


####element(...)
find and select the first element matching the selector

    client.element("my-selector")

####attribute(...)
Alias: attr
Get the attribute value of a pre selected element

    client.element("my-selector").attribute("style")

####hover()
trigger the mouseover event on an element

    client.element(".button-ok").hover();

####elements(...)
find a collection of elements matching the selector
Used in combination with the index command, first or last property

    client.elements("my-selector")

    client.elements("my-grid-rows").index(0)
    client.elements("my-grid-rows").first

####index(n)
select the element n of a pre selected collection of element

    client.elements("my-grid-rows").index(0)

####open(...)
open a url in the browser

    client.open("http://google.com")

####sleep(n)
Alias: pause(n)
pause the driver process for n ms

    client.sleep(1000)

####pressKey(...)
triggers a special key press, ENTER TAB CTRL... to test keyboard navigation

        client.pressKey("TAB")


####find(...)
search for a collection of element within one element.

    client.element("my-grid-container").find(".row")

####select(...)
search for a sub element within one element.

    client.element("my-grid-container").select(".row:first")

####selectText(...)
search for a sub element by its content text within one element.

    client.element("button").selectText("Cancel")

####then(callback)
execute a custom callback in the flow

    client.then(breakStreamingConnection)

####type(...)
type a text within an input field

    client.element("input.description").type("am-webdriver is cool!")


####wait(selector, n)
pause the control flow until the css selector is found, and timeout if not found.

    client.open("http://google.com").wait("input.search", 10000)

####screenshot()
take a screenshot of the current page

    client.open("http://google.com").screenshot()

####global(...)
pre load a window property that may be used in assertion

####Asserts are commands used to test the property of an element

####contains(...)
Alias:  contain, include
Check is the pre stated property include the exected value

    client.element("input").cssClass.contains("error");

####equal(...)
Check is the pre stated property strictly equal the expected value

    client.element("title").text.equal("Hello World!");


####below(n)
Check is the pre stated property is below n (operator used is <)

    client.elements("li").length.should.be.below(10);

####above(n)
Check is the pre stated property is above n (operator used is >)

    client.elements("li").length.should.be.above(10);

####least(n)
Check is the pre stated property is at least n (operator used is >=)

    client.elements("li").length.should.be.at.least(1);

####most(n)
Check is the pre stated property is at most n (operator used is <=)

    client.elements("li").length.should.be.at.most(10);

####startWith(...)
Check is the pre stated property starts with string

    client.element("title").text.should.startWith("Hello");

####endWith(...)
Check is the pre stated property ends with string

    client.element("title").text.should.endWith("World!");

###Properties

####activeElement
Returns the currently focused element, that is, the element that will get keystroke events if the user types any.

    client.activeElement.cssClass.should.contain("field-whatever");

####parent
Select the parent element of the pre selected element

    client.element("li:first").parent.cssClass.should.contain("list-wrapper");

####cssClass
Returns the class attribute value of an element

    client.element(".title").cssClass.should.equal("title and whatever-other-class applied-on-the-element");

####isEnabled
Returns true if the element is enabled and false if not

    client.element(".disabled-field").isEnabled.should.equal(false);

####inspectedElement
Returns the pre selected element

    client.element("div.that-listen-to-change")
    //to access it via a property, you shouldn't need to use this property
    client.inspectedElement


####first
Returns the first element of a pre selected collection of element

    client.elements("li").first.text.should.equal("first item");

####last
Returns the last element of a pre selected collection of element

    client.elements("li").first.text.should.equal("first item");


####length
Returns the number of elements of the pre selected collection of element

    client.elements("li").length.should.equal(3);

####text
Returns the content of an element

    client.element(".title").text.should.equal("Hello World!");


####value
Returns the value of the value attribute of an element

    client.element("option").value.should.equal("0");

####title
Returns the title of the opened window

    client.open("http://google.com").title.should.equal("Google");

####not
Reverts the assertion. So for example, these 2 statements are equivalent

    client.elements("li").length.should.be.at.least(10);
    client.elements("li").length.should.not.be.below(10);


####expect, to, be, at, and, should
These are just linking words to make the api more fluent and does not execute any code in the background. Thus these 2 statements are equivalent.

    client.elements("li").length.should.not.be.below(10);
    client.elements("li").length.not.below(10);


##How to extend the API

####addCommand(name, fn)
Add a chainable function to the client object.

    client.addCommand("login", function(username, password){
        return page.open("http://whatever.com/login")
            .wait('input.login')
                .type(username)
                .pressKey("TAB")
                .type(password)
                .click(".btn-submit");
    });

now you can use login as any other commands in your api
    client.login("admin", "password")
          .open("/admin")
          ...

** Do not forget to return the object **


####addProperty(names, fn)
names: Array of aliases or string
fn: function that will be executed when the property is accessed

This method is used by the builder class to add all the properties in the client object. The fn function will be executed in the control flow and the 'this' object binded to the client object.
So it gives you access to the following properties.

- this._driver: the native selenium driver
- this._flow: The webdriver.promise.controlFlow() - More info https://code.google.com/p/selenium/wiki/WebDriverJs#Control_Flows
- this._flag: the chai/lib/chai/utils.flag object which allows to keep in memory properties. This object is used to compare values in every assertion statements

#####This is a core client api method which should be used wisely. It is recommended that you use 'addCommand' to extend the API

    client.addProperty("length", function(){
        if(!this._flag("elements"))
            return 0;

        var value = this._flag("elements").length;

        this._flag("actual", value);
        return value;
    });


####addChainableMethod(names, fn)
names: Array of aliases or string
fn: function that will be executed when the method is invoked

This method is used by the builder class to add all the commands in the client object. The fn function will be executed in the control flow and the 'this' object is binded to the client object.
See add properties for more details.

#####This is a core client api method which should be used wisely. It is recommended that you use 'addCommand' to extend the API

    client.addChainableMethod(["element", "findFirstElement"], function(cssSelector){
        var that = this;
        return this._driver.findElement(By.css(cssSelector)).then(function(el){
            that._flag("element", el);
            return el;
        });
    }

##How to write tests
Choose your favourite test runner. Jasmine, mocha...

Then you can chain your api calls as much as you like.

        it("list should allow selection with tab", function(done){
            page.activeElement.type("GBP")
                .pressKey("tab")
                .cssClass.should.contains("btn-swap")
                .and.element("[ccy-pair-input]").value.should.equal("GBPAED")
                .then(done);
        });


####Check the example folder for more example of tests and extensions runnable with mocha

##TODO

* Integrate it with BrowserStack

* Write Unit Tests








