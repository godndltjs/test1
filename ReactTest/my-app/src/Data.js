// const postList = [
//     {
//       "id": "asfsa5643",
//       "name": "김회원",
//       "phone": "010-0000-4444",
//       "email": "sadgsa3908@bnosoft.co.kr",
//       "department" : "SI사업본부",
//       "lastDate" : "2020-10-25"
//     },
//     {
//       "id": "yisun12",
//       "name": "이선재",
//       "phone": "010-9255-5065",
//       "email": "yisun12@bnosoft.co.kr",
//       "department" : "ALM사업본부",
//       "lastDate" : "2020-10-25"
//     },
//     {
//       "id": "godndltjs",
//       "name": "이회원",
//       "phone": "010-878-5065",
//       "email": "sadgsa3908@bnosoft.co.kr",
//       "department" : "SI사업본부",
//       "lastDate" : "2020-10-25"
//     },
//     {
//       "id": "deptin",
//       "name": "선회원",
//       "phone": "010-1234-1234",
//       "email": "sadgsa3908@bnosoft.co.kr",
//       "department" : "SI사업본부",
//       "lastDate" : "2020-10-25"
//     },
//     {
//       "id": "asfsa5643",
//       "name": "김회원",
//       "phone": "010-0000-4444",
//       "email": "sadgsa3908@bnosoft.co.kr",
//       "department" : "SI사업본부",
//       "lastDate" : "2020-10-25"
//     },
//   ];
const postList = [
  {
    "no": "0",
    "title": "title1",
    "createDate": "2020-10-25",
    "readCount": "0",
    "content" : "1"
  },
  {
    "no": "1",
    "title": "title1",
    "createDate": "2020-10-25",
    "readCount": "0",
    "content" : "1"
  }, {
    "no": "2",
    "title": "title1",
    "createDate": "2020-10-25",
    "readCount": "0",
    "content" : "1"
  }, {
    "no": "3",
    "title": "title1",
    "createDate": "2020-10-25",
    "readCount": "0",
    "content" : "1"
  }, {
    "no": "4",
    "title": "title1",
    "createDate": "2020-10-25",
    "readCount": "0",
    "content" : "1"
  }
];
  const getPostByNo = (no) => {
    const array = postList.filter(x => x.no === no);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    postList,
    getPostByNo
  };