var bot = require('./bot.js');
var waitSync = require('wait-sync');

init = function(){
    waitSync(0.2)
    bot.go(0, 0, -140);
    console.log("Init Coordinate");
}

click = function(x, y){
    bot.go(x, y, -150);
    waitSync(0.2);
    bot.go(x, y, -165);
    waitSync(0.2);
    bot.go(x, y, -150);
    init();
    console.log("Click Coordinate: ("+ x + ", "+ y + ")");
}

swipeLeft = function(){
    bot.go(20, 0, -165);
    waitSync(0.18);
    bot.go(-20, 0, -165);
    init();
    console.log("Swipe Left");
}

swipeRight = function(){
    bot.go(-20, 0, -165);
    waitSync(0.18);
    bot.go(20, 0, -165);
    init();
    console.log("Swipe Left");
}

swipeUp = function(){
    bot.go(0, -20, -165);
    waitSync(0.18);
    bot.go(0, 20, -165);
    init();
    console.log("Swipe Left");
}

swipeDown = function(){
    bot.go(0, 20, -165);
    waitSync(0.18);
    bot.go(0, -20, -165);
    init();
    console.log("Swipe Left");
}

test = function(x, y, z){
    bot.go(x, y, z);
}

