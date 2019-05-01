var EventEmitter = require('events');
class Gym extends EventEmitter{
    constructor(){
        super();
    }
    visit(){
        console.log("visit")
        setInterval(()=> {this.emit("boom");}, 1000);
    }
}

var dogym = new Gym();
dogym.on('boom', function () {
    console.log("Athlete is working out")
});
dogym.visit();
