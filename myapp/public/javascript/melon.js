var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// scenario 1

	// test move for stable executing
	tapster.swipeUp();
	waitSync(15);

	tapster.iMenu();
	waitSync(15);

	// open Melon
	tapster.click(0, 29);
	waitSync(15);

	// check
	tapster.click(0, -14);
	waitSync(15);

	// x click
	tapster.click(-23, -41);
	waitSync(15);

	// search
	tapster.click(-14, -41);
	waitSync(15);

	// search bar
	tapster.click(0, 33);
	waitSync(15);

	// top list
	tapster.click(0, 23);
	waitSync(15);

	// home
	tapster.click(19, -44);
	waitSync(15);

	// recent list
	tapster.click(20, -37);
	waitSync(15);

	// album
	tapster.click(22, 20);
	waitSync(15);

	// play all
	tapster.click(-7, -19);
	waitSync(15);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}