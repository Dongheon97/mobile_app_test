var tapster = require('../public/javascript/clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// scenario 1

	// test move for stable executing
	tapster.swipeUp();
	waitSync(2);

	tapster.iMenu();
	waitSync(3);

	// open Melon
	tapster.click(0, 29);
	waitSync(7);

	// check
	tapster.click(0, -14);
	waitSync(4);

	// x click
	tapster.click(-23, -41);
	waitSync(4);

	// search
	tapster.click(-14, -41);
	waitSync(3);

	// search bar
	tapster.click(0, 33);
	waitSync(5);

	// top list
	tapster.click(0, 23);
	waitSync(5);

	// home
	tapster.click(19, -44);
	waitSync(3);

	// recent list
	tapster.click(20, -37);
	waitSync(3);

	// album
	tapster.click(22, 20);
	waitSync(4);

	// play all
	tapster.click(-7, -19);
	waitSync(4);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}