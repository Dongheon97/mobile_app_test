var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var fs = require("fs")
const port = 8080;

const mainRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+'/public'));

app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride('__method'));
app.use(express.urlencoded( { extended: true }));
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

app.use('/', mainRouter);

app.listen(port, () => {
    console.log("Express app listening at http://localhost:"+port);
});
