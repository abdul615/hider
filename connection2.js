// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : config.host,
//     user     : 'root',
//     password : 'root',
//     database : 'hider'
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     else console.log("Connected");

    
// });

var mysql = require('mysql');
var connection = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'hider',
    // connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    // multipleStatements : true           // I like this because it helps prevent nested sql statements, it can be buggy though, so be careful
});

module.exports = connection;