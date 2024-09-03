const EventEmitter = require('events');

const emitter = new EventEmitter()

// Registering event listener
emitter.on('msgLogged', (arg) => {
    console.log("arg", arg);
})
// raising an event
emitter.emit('msgLogged', { "id": 1 })
