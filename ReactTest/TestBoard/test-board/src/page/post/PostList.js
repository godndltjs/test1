import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../table/CommonTable';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { postList } from '../../Data';
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar'

//import HeadCommonTable from '../table/HeadCommonTable';
//import HeadCommonTableColumn from '../table/HeadCommonTableColumn';
//import HeadCommonTableRow from '../table/HeadCommonTableRow';


// 조회 버튼, 검색 기능, Rest API,
const PostList = props => {
  const [dataList, setDataList] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  function refreshPage() {
    window.location.reload(false);
  }
  
  
  
  useEffect(() => {
    setDataList(postList);
  }, [])
  function alertPops(dataList){
    
    console.log(dataList + " asdasd");
  }
 const StartContainer = ({ className, children }) => {
    
    return (
      <div style={{ padding: "1px", background: "#216ba5", color: "#fff" }}>
        <Calendar className={className} onChange={date => setStartDate(date)}  >
          <div style={{ position: "relative" }}>{children}</div>

        </Calendar>
      </div>
    );
  };
  const EndContainer = ({ className, children }) => {
    
    return (
      <div style={{ padding: "1px", background: "#216ba5", color: "#fff" }}>
        <Calendar className={className} onChange={date => setEndDate(date)}>
          <div style={{ position: "relative" }}>{children}</div>

        </Calendar>
      </div>
    );
  };
  return (
    
    <>
      <table >
        <tr>
          <td> ID <input class="input-text" type="text" name="sid"/></td>
          <td> 이름 <input class="input-text" type="text" name="sname"/> </td>
          <td>휴대전화번호 <input class="input-text" type="text" name="sphone"/> </td>
        </tr>
        <tr>
          <td> 이메일 <input class="input-text" type="text" name="semail"/></td>
          <td> 소속 <input class="input-text" type="text" name="sdepart"/></td>
          <span>최종접속일 <td><DatePicker
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            padding= "1px"
            background= "#216ba5"
            color= "#fff"
            calendarContainer={StartContainer}
            name= "sstartDate"
          ></DatePicker> </td> ~ <td>
              <DatePicker
                selected={endDate}
                dateFormat="yyyy-MM-dd"
                padding= "1px"
                background= "#216ba5"
                color= "#fff"
                calendarContainer={EndContainer}
                name="sendD ate"
              ></DatePicker> </td> </span>
        </tr>
        <tr><button onClick={refreshPage}>초기화</button> <button onClick={alertPops('asd')}>검색</button></tr>
      </table>

      <CommonTable headersName={['ID', '이름', '휴대전화번호', '이메일', '소속', '최종접속일']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{item.id}</CommonTableColumn>
                <CommonTableColumn>{item.name} </CommonTableColumn>
                <CommonTableColumn>{item.phone}</CommonTableColumn>
                <CommonTableColumn><Link to={"/postView/" + item.id}>{item.email}</Link></CommonTableColumn>
                <CommonTableColumn>{item.department}</CommonTableColumn>
                <CommonTableColumn>{item.lastDate}</CommonTableColumn>

              </CommonTableRow>
            )
          }) : ''
        }

      </CommonTable>
    </>
  )

}

export default PostList;