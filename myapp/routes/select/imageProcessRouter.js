var express=require('express');
var testRouter = express.Router();

var waitSync = require('wait-sync');

testRouter.get("/", (req, res) => {
	res.render('./auto/test', { title: 'Express' });
	const spawn = require('child_process').spawn;
	const result = spawn('python3', ['public/python/processing.py']);
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
	res.end();
});

module.exports = testRouter;

