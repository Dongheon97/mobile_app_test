var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// scenario 1

	// test move for stable executing
	tapster.swipeUp();
	waitSync(10);

	tapster.iMenu();
	waitSync(10);

	// open naver
	tapster.click(0, 13);
	waitSync(10);

	// search bar
	tapster.click(0, 20);
	waitSync(10);

	// recent search list
	tapster.click(0, 30);
	waitSync(10);

	// naver icon
	tapster.click(25, 38);
	waitSync(10);

	// news contents tap
	tapster.click(-19, -38);
	waitSync(10);

	// top list
	tapster.click(0, -3);
	waitSync(10);

	// backward
	tapster.click(14, -44);
	waitSync(10);

	// naver icon
	tapster.click(25, 38);
	waitSync(10);

	// naver menu
	tapster.click(25, 38);
	waitSync(10);

	// mail
	tapster.click(21, 9);
	waitSync(10);
	
	// naver icon
	tapster.click(25, 38);
	waitSync(10);
	
	// Naver Na
	tapster.click(-19, 43);
	waitSync(10);

	// QR check-in
	tapster.click(15, -17);
	waitSync(10);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}