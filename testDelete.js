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



app.post('/remove_mongodb', function(request, response){
    remove_condition_name = request.body.remove_name;

    console.log('remove mongodb' + '[' + remove_condition_name + ']');

    //몽고디비 조건절을 이용하여 특정 컬렉션의 document 삭제//
    remove_mongodb(remove_condition_name, response);
});

app.get('/dropindex_mongodb', function(requeest, response){
    console.log('drop index name field');

    //컬렉션에서 기존 인덱스로 활용되는 필드를 제거.//
    dropindex_mongodb(response);
});

function remove_mongodb(remove_condition_name, response)
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
        //Task 2 : remove//
        function(db, callback)
        {
            //단일 document 제거 : deleteOne(), 전체 document 제거 : deleteMany(), collection 제거 : drop()//
            db.collection('test1').deleteOne({
                "name":remove_condition_name
            }, function(err, results){
                assert.equal(null, err);
                    
                //console.log(results);

                db.close(); //개방했으니 사용 후 닫아준다.//

                callback(null, 'remove ok(if value is not exist that no adjust)...');
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

function dropindex_mongodb(response)
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
            db.collection('test1').dropIndex({
                "name":1
            }, null, function(err, results){
                assert.equal(null, err);

                db.close(); //개방했으니 사용 후 닫아준다.//

                callback(null, 'drop index success...');
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