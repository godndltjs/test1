// var http = require('http');

// http.createServer(function(request,response){
//     response.writeHead(200, {'content': 'text/html'});
//     response.write('test');
//     response.end();
// }).listen(8799);

// console.log('server running at http://localhost:8799');

// MongoClient.connect(url, function (err, database) {
//    if (err) {
//       console.error('MongoDB 연결 실패', err);
//       return;
//    }

//    db = database;
//    console.log(db + "dasdasd");
// });

var MongoClient = require('mongodb').MongoClient;
var MongoAssert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var url = 'mongodb://127.0.0.1:27017/test1';
//var db;
console.log('1');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
 
}));
console.log('2');
app.post('/connect_mongodb', function(request, reponse){
    console.log('mongodb connect');

    connect_mongodb(reponse);
});

function connect_mongodb(reponse){
    console.log('3');
    async.waterfall([
        function(callback){
            MongoClient.connect(url, function(err, db){
                MongoAssert.equal(null,err);
                console.log('connected corrently server');

                db.close();
                callback(null, 'connect server');
            });
        }
    ],
    function(callback,message){
        reponse.send(message);
        
        console.log('===============================================================');
    });
}