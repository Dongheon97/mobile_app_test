var express=require('express');
const waitSync = require('wait-sync');
var processorRouter = express.Router();

//var waitSync = require('wait-sync');

processorRouter.get("/", async (req, res, next) => {
	//res.render('./written/chrome', { title: 'Express' });
	const spawn = require('child_process').spawn;
	// change your file path
	const result = spawn('python3', ['public/python/capture.py']);
	if(result){
		console.log("connected");
	}
	console.log("split image start!")
	result.stdout.on('data', function(data){
		console.log(data.toString());
	});
	result.stderr.on('data', function(data){
		console.log(data.toString());
	});
	
	res.end();
	//waitSync(1);
	//res.redirect("../");
	
});

module.exports = processorRouter;