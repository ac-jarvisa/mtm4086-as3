// JavaScript Document
var events = require("events");

var EventEmitter = require("events").EventEmitter;
var newEE = new EventEmitter();

newEE.on('magicMan', function(funStuff) {
    console.log(funStuff);
});

setInterval(function() {
    newEE.emit('magicMan', 'Yay Himawan!');
}, 5000);

setInterval(function() {
    newEE.emit('magicMan', 'Go Himawan!');
}, 7000);


var ee = new EventEmitter();
ee.setMaxListeners(15);//we add this to avoid getting the error
ee.on("awesomeEvent", function () { console.log("event 1"); });
ee.on("awesomeEvent", function () { console.log("event 2"); });
ee.on("awesomeEvent", function () { console.log("event 3"); });
ee.on("awesomeEvent", function () { console.log("event 4"); });
ee.on("awesomeEvent", function () { console.log("event 5"); });
ee.on("awesomeEvent", function () { console.log("event 6"); });
ee.on("awesomeEvent", function () { console.log("event 7"); });
ee.on("awesomeEvent", function () { console.log("event 8"); });
ee.on("awesomeEvent", function () { console.log("event 9"); });
ee.on("awesomeEvent", function () { console.log("event 10"); });
ee.on("awesomeEvent", function () { console.log("event 11"); });
//ee.removeAllListeners("awesomeEvent");
ee.emit("awesomeEvent");

ee.once("firstConnection", function () { console.log("You'll never me again"); });
//ee.removeAllListeners();
ee.emit("firstConnection");
ee.emit("firstConnection");