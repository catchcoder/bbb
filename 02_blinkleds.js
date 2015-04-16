var b = require('bonescript');
var leds = ["P8_8","P8_10"];

for(var i in leds) {
    b.pinMode( leds[i],b.OUTPUT);
}

var state = b.LOW;

b.digitalWrite(leds[0],state);
b.digitalWrite(leds[1],!state);

setInterval(toggle,1000);

function toggle(){
     b.digitalWrite (leds[1],state);
    if(state==b.LOW) state = b.HIGH;
    else  state = b.LOW;
    b.digitalWrite(leds[0],state);
}
