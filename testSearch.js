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

app.get('/getdoc_count_mongodb', function(request, response){
    console.log('get document count');

    //컬렉션의 문서들의 개수를 가져온다.//
    get_doc_count(response);
});

app.post('/find_mongodb', function(request, response){
    console.log('find mongodb');

    //몽고디비 컬렉션의 전체 document 조회//
    find_mongodb(response);
});

app.post('/search_mongodb', function(request, response){
    search_condition_name = request.body.search_name;

    console.log('search mongodb' + '[' + search_condition_name + ']');

    //몽고디비 조건절을 이용하여 특정 컬렉션의 document 조회//
    search_mongodb(search_condition_name, response);
});

function find_mongodb(response)
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

        //Task 2 : find()
        function(db, callback)
        {
            //조회는 커서(Cursor)의 개념을 이용한다.//
            //조건절은 find()내부에 JSON형태로 작성한다.//
            //정렬조건은 find()외부에 JSON형태로 작성한다. (1은 오름차순, -1은 내림차순)//
            db.collection('test1', function(err, collection) {
                collection
                .find()
                .sort({
                    "age":1
                })
                //toArray를 이용해서 Document의 배열로 반환//
                .toArray(function(err, items) {
                    assert.equal(err, null);

                    console.log(items);

                    db.close(); //개방했으니 사용 후 닫아준다.//

                    callback(null, 'find ok...', items);
                });
            });
        }
    ],
    //Final Task : send//
    function(callback, message, doc)
    {
        console.log(message);

        response.send(doc);

        console.log('--------------------------');
    });
}
//////////////////////////
function search_mongodb(search_condition_name, response)
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

        //Task 2 : find()
        function(db, callback)
        {
            //조회는 커서(Cursor)의 개념을 이용한다.//
            /*조건절은 find()내부에 JSON형태로 작성한다. 기존 연속된 조건은 RDBMS에서는 and를 이용하였지만 MongoDB에서는 key를 붙
            //여주면 된다.*/
            db.collection('test1', function(err, collection) {
                collection
                .find({
                    "name":search_condition_name
                })
                .sort({
                    "age":1
                })
                //toArray를 이용해서 Document의 배열로 반환//
                .toArray(function(err, doc) {
                    assert.equal(err, null);

                   console.log(doc);

                    db.close(); //개방했으니 사용 후 닫아준다.//

                    callback(null, 'search ok(if value is not exist that send [])...', doc);
                });
            });
        }
    ],
    //Final Task : send//
    function(callback, message, doc)
    {
        console.log(message);

        response.send(doc);

        console.log('--------------------------');
    });
}
function get_doc_count(response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
           
            MongoClient.connect(url, {useUnifiedTopology:true},function(err, db){
                assert.equal(null, err);

                callback(null, db);
            });
        },
        //Task 2 : get count document//
        function(db, callback)
        {
            db.collection('test1').count({}, function(err, numOfDocs){
                assert.equal(null, err);

                db.close(); //개방했으니 사용 후 닫아준다.//

                callback(null, numOfDocs);
            });
        }
    ],
    //Final Task : send//
    function(callback, numOfDocs)
    {
        console.log('users collection count: ' + numOfDocs);

        response.send(''+numOfDocs);

        console.log('--------------------------');
    });
}