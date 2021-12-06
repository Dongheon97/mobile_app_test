var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// scenario 1

	// test move for stable executing
	tapster.swipeUp();
	waitSync(10);

	tapster.iMenu();
	waitSync(10);

	// open Melon
	tapster.click(0, 29);
	waitSync(10);

	// check
	tapster.click(0, -14);
	waitSync(10);

	// x click
	tapster.click(-23, -41);
	waitSync(10);

	// search
	tapster.click(-14, -41);
	waitSync(10);

	// search bar
	tapster.click(0, 33);
	waitSync(10);

	// top list
	tapster.click(0, 23);
	waitSync(10);

	// home
	tapster.click(19, -44);
	waitSync(10);

	// recent list
	tapster.click(20, -37);
	waitSync(10);

	// album
	tapster.click(22, 20);
	waitSync(10);

	// play all
	tapster.click(-7, -19);
	waitSync(10);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}