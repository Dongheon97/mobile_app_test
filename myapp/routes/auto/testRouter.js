var express=require('express');
var testRouter = express.Router();
var schedule = require('node-schedule');

var chrome = require('../../public/javascript/chrome');
var melon = require('../../public/javascript/melon');
var naver = require('../../public/javascript/naver')
var waitSync = require('wait-sync');

testRouter.get("/", (req, res) => {
	res.render('./auto/test', { title: 'Express' });
	// 'sec min hour day week ? *'
	var controller = schedule.scheduleJob('* 49 * * * *', (async function (){
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
	}));
	//waitSync(5);
	var imageProcesser = schedule.scheduleJob('* 53 * * * *', (function (){
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
	}));
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
		naver.scenario();
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