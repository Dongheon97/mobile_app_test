var tapster = require('../../tapster/src/clickApp.js');
var waitSync = require('wait-sync');

ios_scenario = function(){
	
	tapster.iMenu();
	waitSync(5);

	// Enter CNU App
	tapster.click(0, -24);
	waitSync(10);

	// 식단 조회
	tapster.click(0, 13);
	waitSync(10);

	// 제2학생회관
	tapster.click(0, 22);
	waitSync(8);

	// 뒤로 가기
	tapster.click(24, 40);
	waitSync(3);

	// 뒤로 가기
	tapster.click(24, 40);
	waitSync(3);

	// 학생증
	tapster.click(0, 2);
	waitSync(8);

	// 실행 내역 삭제
	tapster.iReset();
}

android_scenairo = function(){
	
	tapster.aMenu();
	waitSync(5);

	// Enter CNU App
	tapster.click(-12, -30);
	waitSync(10);

	// 식단 조회
	tapster.click(0, 12);
	waitSync(10);

	// 제2학생회관
	tapster.click(0, 28);
	waitSync(8);

	// 뒤로 가기
	tapster.click(27, 46);
	waitSync(3);

	// 뒤로 가기
	tapster.click(27, 46);
	waitSync(3);

	// 학생증
	tapster.click(0, 0);
	waitSync(8)

	// 실행 내역 삭제
	tapster.aReset();
}

module.exports = {
    android_scenairo,
    ios_scenario
}