// function show(){
//     console.log('Hello World');
// }
// function demo(fun){
//     return fun;
// }
// setTimeout(demo(show),0);

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('action',function(msg){
    console.log(msg);
});
eventEmitter.emit('action','something happened');