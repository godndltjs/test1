var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:32/testDB/testC';
var db;

MongoClient.connect(url, function (err, database) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }

   db = database;
});
