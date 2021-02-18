const postList = [
    {
      "id": "asfsa5643",
      "name": "김회원",
      "phone": "010-0000-4444",
      "email": "sadgsa3908@bnosoft.co.kr",
      "department" : "SI사업본부",
      "lastDate" : "2020-10-25"
    },
    {
      "id": "yisun12",
      "name": "이선재",
      "phone": "010-9255-5065",
      "email": "yisun12@bnosoft.co.kr",
      "department" : "ALM사업본부",
      "lastDate" : "2020-09-23"
    },
    {
      "id": "godndltjs",
      "name": "이회원",
      "phone": "010-878-5065",
      "email": "qwezxc@bnosoft.co.kr",
      "department" : "SI사업본부",
      "lastDate" : "2020-10-02"
    },
    {
      "id": "deptin",
      "name": "선회원",
      "phone": "010-1234-1234",
      "email": "asdasd@bnosoft.co.kr",
      "department" : "ALM사업본부",
      "lastDate" : "2020-01-24"
    },
    {
      "id": "godnsos",
      "name": "재회원",
      "phone": "010-4321-4321",
      "email": "dadsaa@bnosoft.co.kr",
      "department" : "SI사업본부",
      "lastDate" : "2020-11-25"
    },
  ];

  const getPostById = id => {
    const array = postList.filter(x => x.id === id);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    postList,
    getPostById
  };