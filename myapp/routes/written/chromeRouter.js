var express=require('express');
var appRouter = express.Router();

var chrome = require('../../public/javascript/chrome');
var waitSync = require('wait-sync');


appRouter.get("/", async (req, res, next) => {
	res.render('./written/chrome', { title: 'Express' });
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
	res.end();
});

module.exports = appRouter;