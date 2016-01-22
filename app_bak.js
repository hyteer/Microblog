var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var methodOverride = require('method-override');
var connect        = require('connect');
var ejs = require('ejs');
//var Router = require('router');
//var router = Router();
//var router = require('express').Router();

var routes = require('./routes');
var settings = require('./settings.js');


app.use(express.static(__dirname+'/public'));

// Configure

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( {extended: false}));
app.use(methodOverride());
app.use(cookieParser(settings.cookieSecret));
app.use(session({
	secret: settings.cookieSecret,
	resave: false,
    saveUninitialized: true,
	store: new MongoStore({
		/*
		db: settings.db,
		host: settings.host,
    	port: settings.port
    	*/

    	url: settings.url,
	})
}));

//app.use(router);
app.use(routes);
app.use(express.static(__dirname + '/public'));



// Routes
/*
app.get('/', routes.index);
app.get('/u/:user', routes.user);
app.post('/post', routes.post);
app.get('/reg', routes.reg);
app.post('/reg', routes.doReg);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
app.get('logout', routes.logout);
*/












app.listen(3000);
console.log('Server listen on 3000');