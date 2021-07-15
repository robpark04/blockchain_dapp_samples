const Dispatcher = require("flux").Dispatcher;
const Emitter = require("events").EventEmitter;
export const dispatcher = new Dispatcher();
export const emitter = new Emitter();