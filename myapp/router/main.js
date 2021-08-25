
const exec = require('../public/javascript/execute')

module.exports = function(app, fs){
	app.get('/', function(req, res){
		res.render('index.html');
		/*res.render('index', {
			title: "Result Page",
			length: 5
		});*/
	});

	app.get('/test1', function(req,res){
		const spawn = require('child_process').spawn;
		const result = spawn('python3', ['/home/kodo/dongheon/mobile_app_test/myapp/public/python/record.py']);
		console.log("record start!")
		
		result.stdout.on('data', function(data){
			console.log(data.toString());
		});
		result.stderr.on('data', function(data){
			console.log(data.toString());
		});
		res.end();
	}); 

	app.get('/test2', function(req,res){
		var nStart = new Date().getTime();
		let { PythonShell } = require('python-shell');
		let option = {
			mode: 'text',
			pythonPath: '/usr/bin/python3',
			pythonOptions: ['-u'],
			scriptPath: '../public/python/'
		}
		/*
		PythonShell.PythonShell.run('record.py', options, function(err, results){
			console.log(results);
			var nEnd = new Date().getTime();
			console.log(nEnd-nStart +"ms");
		});
		*/

		return res.send('END');
	}); 





	app.get('/ios', function(req, res){		
		console.log("@@@@@@@@@@@@ iOS Testing Start! @@@@@@@@@@@@");
		exec.ios_scenario();
		return res.redirect("../");

	});

	app.get('/android', function(req, res){
		console.log("@@@@@@@@@@@@ Android Testing Start! @@@@@@@@@@@@");
		exec.android_scenairo();
		return res.redirect("../");
	});

	app.get('/stream', function(req, res){
		console.log("video streaming test");
		res.render('test.html');
	})











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
		res.end();
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
}
