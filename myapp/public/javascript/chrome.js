var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// test move for stable executing
	tapster.swipeUp();	waitSync(15);

	tapster.iMenu();	waitSync(15);

	// open chrome
	tapster.click(0, 36);	waitSync(15);

	// search bar
	tapster.click(0, 7);	waitSync(15);

	// recent search list
	tapster.click(0, 27);	waitSync(15);

	// google icon
	tapster.click(3, 34);	waitSync(15);

	// image search
	tapster.click(13, 34);	waitSync(15);

	// search bar
	tapster.click(0, 7);	waitSync(15);

	// top
	tapster.click(0, 7);	waitSync(15);

	// google icon
	tapster.click(3, 34);	waitSync(15);
	
	// menu
	tapster.click(-12, 36);	waitSync(15);	

	// google map
	tapster.click(-12, 26);	waitSync(15);

	// back
	tapster.click(20, -44);	waitSync(15);
	
	// menu
	tapster.click(-12, 36);	waitSync(15);

	// google drive
	tapster.click(0, -17);	waitSync(15);
	
	// 실행 내역 삭제
	tapster.iReset();
}

module.exports = {
	scenario
}