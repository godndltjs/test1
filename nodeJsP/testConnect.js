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
var express = require('express'); //express는 기본적으로 쿠키의 기능을 가지고 있지 않다.//
var bodyParser = require('body-parser'); //POST방식//
var assert = require('assert'); //NULL 유효검증 모듈//
var async = require('async'); //비동기 순차처리를 위한 모듈//
//데이터베이스 관련 모듈//
//사용자 중요정보 - RDBMS 사용 / 다양하고 형식이 지정되지 않은 정보 - NoSQL//
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();
var url = 'mongodb://127.0.0.1:27017/test1'; //Mongodb URL(IP:PORT/Database)//

//POST설정//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     //to support URL-encoded bodies (url-encoded방식)//
    extended: true
}));

//입력변수//
var name;
var age;
var address;
var search_condition_name; //검색 조건변수//
var update_condition_name; //수정 조건변수//
var update_age_value; //수정할 나이//
var remove_condition_name; //제거 조건변수//

app.post('/connect_mongodb', function(request, response){
    console.log('connect mongodb...');

    //몽고디비 연결//
    connect_mongodb(response);
});

app.post('/insert_mongodb', function(request, response){
    name = request.body.name; //전송할 메세지를 받는다.//
    age = request.body.age;
    address = request.body.address;

    console.log('name: ' + name + "/ age: " + age + "/ address: " + address);

    //몽고디비에 저장//
    insert_mongodb(name, age, address, response);

    //response.send('success...');
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

app.post('/update_mongodb', function(request, response){
    update_condition_name = request.body.update_name;
    update_age_value = request.body.update_age;

    console.log('update mongodb' + '[' + update_condition_name + ']');

    //몽고디비 조건절을 이용하여 특정 컬렉션의 document 수정//
    update_mongodb(update_condition_name, update_age_value, response);
});

app.post('/remove_mongodb', function(request, response){
    remove_condition_name = request.body.remove_name;

    console.log('remove mongodb' + '[' + remove_condition_name + ']');

    //몽고디비 조건절을 이용하여 특정 컬렉션의 document 삭제//
    remove_mongodb(remove_condition_name, response);
});

app.get('/createindex_mongodb', function(request, response){
    //get - request.query.~ / post - request.body.~//
    console.log('create index name field');

    //컬렉션에서 검색조건으로 많이 사용되는 필드를 인덱스 추가. 보통에 인덱스의 생성은 컬렉션 생성 시 이루어진다.//
    //Index - 검색질의 수행능력 향상, B-Tree자료구조 사용.//
    createindex_mongodb(response);
});

app.get('/dropindex_mongodb', function(requeest, response){
    console.log('drop index name field');

    //컬렉션에서 기존 인덱스로 활용되는 필드를 제거.//
    dropindex_mongodb(response);
});

app.get('/getdoc_count_mongodb', function(request, response){
    console.log('get document count');

    //컬렉션의 문서들의 개수를 가져온다.//
    get_doc_count(response);
});

app.listen(3000, function(){
    console.log('Connected 3000 port')
    console.log('--------------------------');
});
//////////////////////////
function connect_mongodb(response)
{
    async.waterfall([
        //파일이 현재 저장소에 저장되어있는지 검사//
        function(callback) //첫 시작은 하나의 callback으로 시작한다.//
        {
            MongoClient.connect(url, function(err, db){
                assert.equal(null, err);

                console.log('Connected correctly to server');

                db.close(); //개방했으니 사용 후 닫아준다.//

                callback(null, 'connect mongodb'); //콜백호출//
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