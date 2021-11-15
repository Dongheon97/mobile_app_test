var tapster = require('./clickApp.js');
var waitSync = require('wait-sync');

scenario = function(){
	// scenario 1

	// test move for stable executing
	tapster.swipeUp();
	waitSync(2);

	tapster.iMenu();
	waitSync(3);

	// open naver
	tapster.click(0, 13);
	waitSync(7);

	// search bar
	tapster.click(0, 20);
	waitSync(4);

	// recent search list
	tapster.click(0, 30);
	waitSync(4);

	// naver icon
	tapster.click(25, 38);
	waitSync(3);

	// news contents tap
	tapster.click(-19, -38);
	waitSync(5);

	// top list
	tapster.click(0, -3);
	waitSync(5);

	// backward
	tapster.click(14, -44);
	waitSync(3);

	// naver icon
	tapster.click(25, 38);
	waitSync(3);

	// naver menu
	tapster.click(25, 38);
	waitSync(4);

	// mail
	tapster.click(21, 9);
	waitSync(5);
	
	// naver icon
	tapster.click(25, 38);
	waitSync(3);
	
	// Naver Na
	tapster.click(-19, 43);
	waitSync(5);

	// QR check-in
	tapster.click(15, -17);
	waitSync(5);
	
	// 실행 내역 삭제
	tapster.iReset();
}



module.exports = {
    scenario
}