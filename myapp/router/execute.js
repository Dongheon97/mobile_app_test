var tapster = require('../tapster/src/clickApp.js');
var waitSync = require('wait-sync');

function ios_scenario(){
	console.log("Start iOS Testing");
	tapster.iMenu();
	waitSync(3);

	// Enter CNU App
	tapster.click(0, -24);
	waitSync(5);

	// 식단 조회
	tapster.click(0, 11);
	waitSync(3);

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

function android_scenairo(){
	console.log("Start Android Testing");
	tapster.aMenu();
	waitSync(3);

	// Enter CNU App
	tapster.click(-12, -30);
	waitSync(5);

	// 식단 조회
	tapster.click(0, 10);
	waitSync(3);

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