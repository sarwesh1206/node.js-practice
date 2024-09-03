const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(msg) {
        console.log("msg:", msg);
        // Raising an event
        this.emit('msgLogged', { "id": 1 })
    }
}

module.exports = Logger