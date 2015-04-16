var b = require('bonescript');
var led = "P8_8";

b.pinMode(led, b.OUTPUT);

var state = b.LOW;

b.digitalWrite(led, state);

setInterval(toggle,1000);

function toggle(){
    if(state==b.LOW) state = b.HIGH;
    else  state = b.LOW;
    b.digitalWrite(led, state);
}
