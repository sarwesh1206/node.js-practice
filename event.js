var EventEmitter = require('events');
var crazy = new EventEmitter();
crazy.on('event1', function () {
    console.log('event1 fired!');
    setImmediate(function () { crazy.emit('event2'); });
});
crazy.on('event2', function () {
    console.log('event2 fired!');
    setImmediate(function () { crazy.emit('event3'); });
});
crazy.on('event3', function () {
    console.log('event3 fired!');
    setImmediate(function () { crazy.emit('event1'); });
});
crazy.emit('event1');


var EventEmitter = require('events'); var crazy = new EventEmitter(); crazy.on('event1', function () { console.log('event1 fired!'); setImmediate(function () { crazy.emit('event2'); }); }); crazy.on('event2', function () { console.log('event2 fired!'); setImmediate(function () { crazy.emit('event3'); }); }); crazy.on('event3', function () { console.log('event3 fired!'); setImmediate(function () { crazy.emit('event1'); }); }); crazy.emit('event1');
from GAYATHRI GOPALAKRISHNAN(IBM) to Everyone12: 55


async function check(req, res) {
    try {
        const a = await someOtherFunction();
        const b = await somethingElseFunction();
        res.send("result")
    } catch (error) {
        res.send(error.stack);
    }
}

piping in Node.js
shallow copy
Based on Memoization
5)why we update stat using this.setState function, why we don't update using this.state ?
virtual Dom, pure components, hooks.
Designing database for student and courses and provide the queries for 3 cases such as which student registered for more courses and which courses registered by student more.