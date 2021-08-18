module.exports = function(app, fs){
	app.get('/', function(req, res){
		res.render('index', {
			title: "Result Page",
			length: 5
		})
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
		})

	});
}

/* ############################################################ */
const add = require('./calc.js').add;
const sub = require('./calc.js').sub;
const mult = require('./calc.js').mult;
const div = require('./calc.js').div;
/* ############################################################ */

console.log(mult(3, 4), add(2, 4));