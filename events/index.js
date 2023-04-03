const event = require('events');
class Emitter extends event{
    constructor(){
     super();
     console.log('Emitter Event Class');
   }

   logOutUser(){
     console.log('User will Logout');
   }
}

emitter = new Emitter();
emitter.once('onClick',function(){
      console.log('on Click Event');
}); //calling only once
emitter.on('dance',function(){
	 console.log('dance Event');
});  //calling N of times

emitter.emit('onClick');
emitter.emit('onClick');
emitter.emit('onClick');
emitter.emit('dance');
emitter.emit('dance');
emitter.emit('dance');

emitter.logOutUser(); //customMethod Calling






