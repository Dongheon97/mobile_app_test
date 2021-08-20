var exec = require('../public/js/execute')
/*
var tapster = require('../tapster/src/clickApp.js');
var waitSync = require('wait-sync');
//const ios_exec = require('../public/js/execute.js');

ios_scenario = function(){
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

android_scenairo = function(){
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

*/

module.exports = function(app, fs){
	app.get('/', function(req, res){
		res.render('index.html')
		/*res.render('index', {
			title: "Result Page",
			length: 5
		});*/
		
	});

	app.get('/ios', function(req, res){
		console.log("@@@@@@@@@@@@ iOS Testing Start! @@@@@@@@@@@@");
		exec.ios_scenario();
		//console.log("@@@@@@@@@@@@ iOS Testing Finished! @@@@@@@@@@@@");
	});

	app.get('/android', function(req, res){
		console.log("@@@@@@@@@@@@ Android Testing Start! @@@@@@@@@@@@");
		exec.android_scenairo();
		//console.log("@@@@@@@@@@@@ Android Testing Finished! @@@@@@@@@@@@");
	});

	app.get('/list', function(req, res){
		fs.readFile( __dirname + "/../data/" + "result.json", 'utf8', function (err, data) {
			console.log( data );
			res.end( data );
		});
	});

	app.get('/result/:num', function(req, res){
		fs.readFile( __dirname + "/../data/result.json", 'utf8', function (err, data){
			var appNames = JSON.parse(data);
			res.json(appNames[req.params.num]);
		});
	});
	
	app.post('/add/:num', function(req, res){
		var result = {};
		var num = req.params.num;

		// Check Validity
		if(!req.body["appName"]){
			result["success"] = 0;
			result["error"] = "Invalid Request";
			res.json(result);
			return;
		}

		// Load Data & Check Dupblication
		fs.readFile( __dirname + "/../data/result.json", 'utf8', function (err, data){
			var test = JSON.parse(data);
			if(test[num]){
				result["success"] = 0;
				result["error"] = "duplicate";
				res.json(result);
				return;
			}
			
			// Add to Data
			test[num] = req.body;

			// Save Data
			fs.writeFile(__dirname + "/../data/result.json",
						JSON.stringify(test, null, '\t'), 'utf8', function(err,data){
							result = {"success": 1};
							res.json(result);
						})
		});
		res.end();
	});
	ios_scenario,
	android_scenairo
}