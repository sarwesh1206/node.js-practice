const Logger = require('./logger')

const logger = new Logger()
// Registering a callback function to a event
logger.on('msgLogged', (arg) => { console.log("arg:", arg); })

logger.log('logger called')