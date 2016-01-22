// Export routes
var router = require('router')();

	router.get('/',function(req,res){
		res.render('index', { title: 'Home'});
		console.log('requesting home page...');
	});

	router.get('user',function(req,res){
		res.render('user');
});

	router.get('/reg',function(req,res){
		res.render('reg', { title: 'Sign Up'});
});	

	router.post('/reg',function(req,res){

	})

	router.get('/login',function(req,res){
		res.render('login', { title: 'Sign Up'});
});	

	router.post('/login',function(req,res){
		res.render('doLogin', { title: 'Sign In'});
});	

	router.get('/logout',function(req,res){
		res.render('logout', { title: 'Log Out'});
});	



module.exports = router;