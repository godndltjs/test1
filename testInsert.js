var express = require('express'); //express는 기본적으로 쿠키의 기능을 가지고 있지 않다.//
var bodyParser = require('body-parser'); //POST방식//
var assert = require('assert'); //NULL 유효검증 모듈//
var async = require('async'); //비동기 순차처리를 위한 모듈//
//데이터베이스 관련 모듈//
//사용자 중요정보 - RDBMS 사용 / 다양하고 형식이 지정되지 않은 정보 - NoSQL//
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();
var url = 'mongodb://localhost:27017/test1'; //Mongodb URL(IP:PORT/Database)//

//POST설정//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     //to support URL-encoded bodies (url-encoded방식)//
    extended: true
}));

//view js에 대해서도 공부해볼것.

//입력변수// 
var name;
var age;
var address;
var search_condition_name; //검색 조건변수//
var update_condition_name; //수정 조건변수//
var update_age_value; //수정할 나이//
var remove_condition_name; //제거 조건변수//

app.post('/insert_mongodb', function(request, response){
    name = request.body.name; //전송할 메세지를 받는다.//
    age = request.body.age;
    address = request.body.address;

    console.log('name: ' + name + "/ age: " + age + "/ address: " + address);

    //몽고디비에 저장//
    insert_mongodb(name, age, address, response);

    response.send('success...');
});

app.get('/createindex_mongodb', function(request, response){
    //get - request.query.~ / post - request.body.~//
    console.log('create index name field');

    //컬렉션에서 검색조건으로 많이 사용되는 필드를 인덱스 추가. 보통에 인덱스의 생성은 컬렉션 생성 시 이루어진다.//
    //Index - 검색질의 수행능력 향상, B-Tree자료구조 사용.//
    createindex_mongodb(response);
});

function insert_mongodb(name, age, address, response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
            MongoClient.connect(url, {useUnifiedTopology:true},function(err, client){
                assert.equal(null, err);
                var db = client.db;
                //Connection으로 몽고디비 자원을 가지고 있는 db변수를 넘김//
                callback(null, db, name, age, address);
            });
        },
        //Task 2 : insert//
        function(client, name, age, address, callback)
        {
            var db = MongoClient.db;
            db.collection('test1')
            .insertOne( {
                "name": name,
                "age":age,
                "address":address
            }, function(err, result) {
                assert.equal(err, null);
                
                console.log("Inserted a document into the restaurants collection.");

                db.close(); //개방했으니 사용 후 닫아준다.//
                
                callback(null, 'insert succcess mongodb'); //콜백호출//
            });
        }
    ],
    //Final Task : send
    function(callback, message)
    {
        response.send(message);

        console.log('--------------------------');
    });
}


function createindex_mongodb(response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
            MongoClient.connect(url, function(err, db){
                assert.equal(null, err);

                callback(null, db);
            });
        },
        //Task 2 : 인덱스 생성//
        function(db, callback)
        {
            //createIndex()시 인덱스 생성, compoundIndex시 ','로 연결//
            db.collection('test1').createIndex({
                "name":1
            }, null, function(err, results){
                assert.equal(null, err);

                db.close(); //개방했으니 사용 후 닫아준다.//

                callback(null, 'create index success...');
            });
        }
    ],
    //Final Task : send//
    function(callback, message)
    {
        console.log(message);

        response.send(message);

        console.log('--------------------------');
    });
}
///////////////////////////