var bot = require('./bot.js');
var waitSync = require('wait-sync');

init = function(){
    waitSync(0.2)
    bot.go(0, 0, -140);
    console.log("Init Coordinate");
}

click = function(x, y){
    bot.go(x, y, -155);
    waitSync(0.2);
    bot.go(x, y, -167);
    waitSync(0.2);
    bot.go(x, y, -155);
    init();
    console.log("Click Coordinate: ("+ x + ", "+ y + ")");
}

swipeRight = function(){
    bot.go(20, 0, -163);
    waitSync(0.18);
    bot.go(-20, 0, -163);
    init();
    console.log("Swipe Right");
}

swipeLeft = function(){
    bot.go(-20, 0, -163);
    waitSync(0.18);
    bot.go(20, 0, -163);
    init();
    console.log("Swipe Left");
}

swipeDown = function(){
    bot.go(0, -20, -163);
    waitSync(0.18);
    bot.go(0, 20, -163);
    init();
    console.log("Swipe Down");
}

swipeUp = function(){
    bot.go(0, 20, -163);
    waitSync(0.18);
    bot.go(0, -20, -163);
    init();
    console.log("Swipe Up");
}

home = function(){
    //click(0, -42);
    click(3, 43);
    console.log("Home Button");
}
// Home button Double click
double_home = function(){
    bot.go(3, 43, -155);
    waitSync(0.2);
    bot.go(3, 43, -167);
    waitSync(0.20);
    bot.go(3, 43, -155);
    waitSync(0.20);
    bot.go(3, 43, -167);
    waitSync(0.20);
    bot.go(3, 43, -155);
    init();
    console.log("Home Button Double Click");
}

menu_ios = function(){
    const xs = 5;
    const ys = -32;
    for(var i=0; i<9; i++){
        bot.go(xs, ys+(7*i), -155);
        waitSync(1);
    }
}

galaxy = function(){
    bot.go(-25, 20, -150);
    waitSync(0.2);
    bot.go(-25, 20, -163);
    waitSync(0.2);
    bot.go(0, 20, -163);
    init();
    console.log("Galaxy Menu");
}


launch = function(){
    bot.go(3, 43, -157);
    waitSync(0.2);
    bot.go(3, 43, -165);
    waitSync(1);
    bot.go(3, 43, -157);
    init();
}

