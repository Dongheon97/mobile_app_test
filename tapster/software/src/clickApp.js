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

// Home button Double click
double_home = function(){
    bot.go(0, -42, -150);
    waitSync(0.2);
    bot.go(0, -42, -165);
    waitSync(0.20);
    bot.go(0, -42, -150);
    waitSync(0.20);
    bot.go(0, -42, -165);
    waitSync(0.20);
    bot.go(0, -42, -150);
    init();
    console.log("Home Button Double Click");
}

swipeLeft = function(){
    bot.go(20, 0, -163);
    waitSync(0.18);
    bot.go(-20, 0, -163);
    init();
    console.log("Swipe Left");
}

swipeRight = function(){
    bot.go(-20, 0, -163);
    waitSync(0.18);
    bot.go(20, 0, -163);
    init();
    console.log("Swipe Left");
}

swipeUp = function(){
    bot.go(0, -20, -163);
    waitSync(0.18);
    bot.go(0, 20, -163);
    init();
    console.log("Swipe Up");
}

swipeDown = function(){
    bot.go(0, 20, -163);
    waitSync(0.18);
    bot.go(0, -20, -163);
    init();
    console.log("Swipe Down");
}

home = function(){
    click(1, -42);
    console.log("Home Button");
}

/*menu = function(){
    const xs = -3;
    const ys = 35;
    for(var i=0; i<9; i++){
        bot.go(xs+2*i, ys-7*i, -150);
        waitSync(0.5);
    }
    
}*/


launch = function(){
    bot.go(1, -42, -150);
    waitSync(0.2);
    bot.go(1, -42, -165);
    waitSync(1);
    bot.go(1, -42, -150);
    init();
}

