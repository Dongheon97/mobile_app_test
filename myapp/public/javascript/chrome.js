var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// test move for stable executing
	tapster.swipeUp();	waitSync(10);

	tapster.iMenu();	waitSync(10);

	// open chrome
	tapster.click(0, 36);	waitSync(10);

	// search bar
	tapster.click(0, 7);	waitSync(10);

	// recent search list
	tapster.click(0, 27);	waitSync(10);

	// google icon
	tapster.click(3, 34);	waitSync(10);

	// image search
	tapster.click(13, 34);	waitSync(10);

	// search bar
	tapster.click(0, 7);	waitSync(10);

	// top
	tapster.click(0, 7);	waitSync(10);

	// google icon
	tapster.click(3, 34);	waitSync(10);
	
	// menu
	tapster.click(-12, 36);	waitSync(10);	

	// google map
	tapster.click(-12, 26);	waitSync(10);

	// back
	tapster.click(20, -44);	waitSync(10);
	
	// menu
	tapster.click(-12, 36);	waitSync(10);

	// google drive
	tapster.click(0, -17);	waitSync(10);
	
	// 실행 내역 삭제
	tapster.iReset();
}

module.exports = {
	scenario
}