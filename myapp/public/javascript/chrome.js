var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// test move for stable executing
	tapster.swipeUp();	waitSync(2);

	tapster.iMenu();	waitSync(7);

	// open chrome
	tapster.click(0, 36);	waitSync(7);

	// search bar
	tapster.click(0, 7);	waitSync(7);

	// recent search list
	tapster.click(0, 27);	waitSync(7);

	// google icon
	tapster.click(3, 34);	waitSync(7);

	// image search
	tapster.click(13, 34);	waitSync(7);

	// search bar
	tapster.click(0, 7);	waitSync(7);

	// top
	tapster.click(0, 7);	waitSync(7);

	// google icon
	tapster.click(3, 34);	waitSync(7);
	
	// menu
	tapster.click(-12, 36);	waitSync(7);	

	// google map
	tapster.click(-12, 26);	waitSync(7);

	// back
	tapster.click(20, -44);	waitSync(7);
	
	// menu
	tapster.click(-12, 36);	waitSync(7);

	// google drive
	tapster.click(0, -17);	waitSync(7);
	
	// 실행 내역 삭제
	tapster.iReset();}

module.exports = {
    scenario
}