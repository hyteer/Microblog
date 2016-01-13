var express = require('express');
var app = express();
var routes = require('./routes');
var ejs = require('ejs');

app.use(express.static(__dirname+'/public'));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');



// Routes
app.get('/', routes.index);
app.get('/u/:user', routes.user);
app.post('/post', routes.post);
app.get('/reg', routes.reg);
app.post('/reg', routes.doReg);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
app.get('logout', routes.logout);











app.listen(3000);