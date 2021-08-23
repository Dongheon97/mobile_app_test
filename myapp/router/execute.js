var tapster = require('../../tapster/src/clickApp.js');
var waitSync = require('wait-sync');

ios_scenario = function(){
	console.log("Start iOS Testing");
	tapster.iMenu();
	waitSync(3);

	// Enter CNU App
	tapster.click(0, -24);
	waitSync(7);

	// 식단 조회
	tapster.click(0, 11);
	waitSync(4);

	// 제2학생회관
	tapster.click(0, 22);
	waitSync(3);

	// 뒤로 가기
	tapster.click(23, 40);
	waitSync(1);

	// 뒤로 가기
	tapster.click(23, 40);
	waitSync(1);

	// 학생증
	tapster.click(0, 2);
}

android_scenairo = function(){
	console.log("Start Android Testing");
	tapster.aMenu();
	waitSync(3);

	// Enter CNU App
	tapster.click(-12, -30);
	waitSync(7);

	// 식단 조회
	tapster.click(0, 10);
	waitSync(4);

	// 제2학생회관
	tapster.click(0, 28);
	waitSync(3);

	// 뒤로 가기
	tapster.click(25, 46);
	waitSync(1);

	// 뒤로 가기
	tapster.click(25, 46);
	waitSync(1);

	// 학생증
	tapster.click(0, 0);
}

module.exports = {
    android_scenairo,
    ios_scenario
}