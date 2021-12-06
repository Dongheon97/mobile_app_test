var express = require('express');
var router = express.Router();

const chromeRouter = require('./select/chromeRouter');
const naverRouter = require('./select/naverRouter');
const melonRouter = require('./select/melonRouter');

const imageProcessRouter = require('./auto/processingRouter');

router.get('/', function(req, res, next){
	res.render('./index', { title : 'Express' });
});

router.get('/auto', function(req, res, next){
	res.render('./auto/auto', { title: 'Express' });
});


router.use('/auto/chrome', imageProcessRouter);
// router.use('/auto/naver/ip', imageProcessRouter);
// router.use('/select/melon/ip', imageProcessRouter);


router.get('/select', function(req, res, next){
	res.render('./select/select', { title: 'Express' });
});

router.use('/select/chrome', chromeRouter);
router.use('/select/naver', naverRouter);
router.use('/select/melon', melonRouter);

module.exports = router;


