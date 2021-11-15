var express = require('express');
var router = express.Router();

const chromeRouter = require('./written/chromeRouter');
const naverRouter = require('./written/naverRouter');
const melonRouter = require('./written/melonRouter');

router.get('/', function(req, res, next){
	res.render('./index.html', { title : 'Express' });
})

router.get('/written', function(req, res, next){
	res.render('./written.html', { title: 'Express' });
})

router.use('/chrome', chromeRouter);
router.use('/naver', naverRouter);
router.use('/melon', melonRouter);

module.exports = router;


/*
module.exports = function(app, fs){
	app.get('/', function(req, res){
		//res.render('index.ejs');
		res.render('index', {
			title: "Result Page",
			//length: 5
		});
	});
	app.get('/custom', function(req, res){
		res.render('custom.html');
		// res.render('index', {
		// 	title: "Result Page",
		// 	length: 5
		// });
	});
	app.get('/written', function(req, res){
		res.render('written.html');
		// res.render('index', {
		// 	title: "Result Page",
		// 	length: 5
		// });
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
	// 파일 이름 받아와서 Speed Index 수행하기!
	app.post('/chrome', function(req,res){
		const spawn = require('child_process').spawn;
		// change your file path
		const result = spawn('python3', ['public/python/record.py']);
		if(result){
			console.log("connected");
		}
		console.log("record start!")
		result.stdout.on('data', function(data){
			console.log(data.toString());
		});
		result.stderr.on('data', function(data){
			console.log(data.toString());
		});
		try{
			console.log("start");
			waitSync(3);
			chrome.scenario();
			console.log("end");
		}catch(err){
			console.log(err);
		}
		return res.redirect("../");
		//res.end();
	}); 

	app.get('/naver', function(req, res){
		const spawn = require('child_process').spawn;
		// change your file path
		const result = spawn('python3', ['public/python/record.py']);
		if(result){
			console.log("connected");
		}
		console.log("record start!")
		result.stdout.on('data', function(data){
			console.log(data.toString());
		});
		result.stderr.on('data', function(data){
			console.log(data.toString());
		});
		try{
			console.log("start");
			waitSync(3);
			naver.scenario();
			console.log("end");
		}catch(err){
			console.log(err);
		}
		return res.redirect("../");
		//res.end();
	});

	app.get('/melon', function(req, res){
		const spawn = require('child_process').spawn;
		// change your file path
		const result = spawn('python3', ['public/python/record.py']);
		if(result){
			console.log("connected");
		}
		console.log("record start!")
		result.stdout.on('data', function(data){
			console.log(data.toString());
		});
		result.stderr.on('data', function(data){
			console.log(data.toString());
		});
		try{
			console.log("start");
			waitSync(3);
			melon.scenario();
			console.log("end");
		}catch(err){
			console.log(err);
		}
		return res.redirect("../");
		//res.end();
	});

	app.get('/stream', function(req, res){
		console.log("video streaming test");
		res.render('test.html');
	});
	
}
*/