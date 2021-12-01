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
	waitSync(15);

	// news contents tap
	tapster.click(-19, -38);
	waitSync(15);

	// top list
	tapster.click(0, -3);
	waitSync(15);

	// backward
	tapster.click(14, -44);
	waitSync(15);

	// naver icon
	tapster.click(25, 38);
	waitSync(15);

	// naver menu
	tapster.click(25, 38);
	waitSync(15);

	// mail
	tapster.click(21, 9);
	waitSync(15);
	
	// naver icon
	tapster.click(25, 38);
	waitSync(15);
	
	// Naver Na
	tapster.click(-19, 43);
	waitSync(15);

	// QR check-in
	tapster.click(15, -17);
	waitSync(15);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}