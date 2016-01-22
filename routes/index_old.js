// Export routes
exports.index = function(req,res){
	res.render('index', { title: 'Home'});
	console.log('requesting home page...');
};
exports.user = function(req,res){
	res.render('user');
};
exports.post = function(req,res){

};
exports.reg = function(req,res){
	res.render('reg', { title: 'Sign Up'});
};
exports.doReg = function(req,res){

};
exports.login = function(req,res){
	res.render('login',{ title: 'Login'})
};
exports.doLogin = function(req,res){

};
exports.logout = function(req,res){
};