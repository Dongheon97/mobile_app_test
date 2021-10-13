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
    bot.go(0, +20, -163);
    waitSync(0.18);
    bot.go(0, -20, -163);
    init();
    console.log("Swipe Down");
}

swipeUp = function(){
    bot.go(0, -20, -167);
    waitSync(0.2);
    bot.go(0, +20, -167);
    init();
    console.log("Swipe Up");
}

// iOS
iHome = function(){
    bot.go(-2, -40, -155);
    waitSync(0.2);
    bot.go(-2, -40, -167);
    waitSync(0.2);
    bot.go(-2, -40, -155);
    init();
    console.log("iOS Home");
}

iMenu = function(){
    bot.go(-2, -40, -157);
    waitSync(0.2);
    bot.go(-2, -40, -165);
    waitSync(1);
    bot.go(-2, -40, -157);
    init();
    console.log("iOS Menu")
}

iReset = function(){
    iDouble_home();
    waitSync(1.7);
    swipeUp();
}

// Home button Double click
iDouble_home = function(){
    bot.go(-2, -40, -155);
    waitSync(0.2);
    bot.go(-2, -40, -167);
    waitSync(0.20);
    bot.go(-2, -40, -155);
    waitSync(0.20);
    bot.go(-2, -40, -167);
    waitSync(0.20);
    bot.go(-2, -40, -155);
    init();
    console.log("iOS Double Home");
}

iCoordinates = function(){
    const xs = 5;
    const ys = -32;
    for(var i=0; i<9; i++){
        bot.go(xs, ys+(7*i), -155);
        waitSync(1);
    }
}

// Android
aHome = function(){
    bot.go(0, -56, -150);
    waitSync(0.2);
    bot.go(0, -56, -163);
    waitSync(0.2);
    bot.go(0, -56, -150);
    init();
    console.log("Android Home")
}

aMenu = function(){
    bot.go(-24, 25, -150);
    waitSync(0.2);
    bot.go(-24, 25, -163);
    waitSync(0.2);
    bot.go(0, 25, -163);
    init();
    console.log("Android Menu");
}

aReset = function(){
    click(14, -58);
    waitSync(1.7);
    swipeUp();
    //waitSync(1.5);
    //click(0, -35);
}

module.exports = {
    click,
    swipeDown,
    swipeUp,
    swipeLeft,
    swipeRight,
    iMenu,
    iHome,
    iReset,
    aHome,
    aMenu,
    aReset
}
