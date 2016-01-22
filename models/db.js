var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = new Db.Server(settings.host,Connection.DEFAULT_PORT,{auto_reconnect:true});

module.exports = new Db(settings.db, server, {safe:true});
