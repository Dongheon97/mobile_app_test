var express=require('express');
var testRouter = express.Router();
var schedule = require('node-schedule');

var chrome = require('../../public/javascript/chrome');
var waitSync = require('wait-sync');

testRouter.get("/", (req, res) => {
	res.render('./auto/test', { title: 'Express' });
	var robotControlling = schedule.scheduleJob('0 30 0/1 1/1 * ? *', robotControll());
	var imageProcessing = schedule.scheduleJob('0 35 0/1 1/1 * ? *', imageProcess());
});

async function robotControll(){
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
}

function imageProcess(){
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
}

module.exports = testRouter;


// appRouter.get("/", async (req, res, next) => {
// 	res.render('./auto/processing', { title: 'Express' });
// 	const spawn = require('child_process').spawn;
// 	// change your file path
// 	const result = spawn('python3', ['public/python/record.py']);
// 	if(result){
// 		console.log("connected");
// 	}
// 	console.log("record start!")
// 	result.stdout.on('data', function(data){
// 		console.log(data.toString());
// 	});
// 	result.stderr.on('data', function(data){
// 		console.log(data.toString());
// 	});
// 	try{
// 		console.log("start");
// 		waitSync(3);
// 		chrome.scenario();
// 		console.log("end");
// 	}catch(err){
// 		console.log(err);
// 	}
// 	setTimeout(imageProcess, 130000);
// 	res.end();
// });