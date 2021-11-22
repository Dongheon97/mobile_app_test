var express=require('express');
var router = express.Router();

var melon = require('../../public/javascript/melon');
var waitSync = require('wait-sync');

router.get("/", async (req, res, next) => {
	res.render('./written/melon.html');
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
	res.redirect("../");
	res.end();
});

module.exports = router;