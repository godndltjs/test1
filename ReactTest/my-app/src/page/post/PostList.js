/* eslint-disable no-template-curly-in-string */
// import React from 'react';

// const PostList = props => {
//   return (
//     <>
//     <table>
//         <thead>
//             <tr>
//                 <th>No.</th>
//                 <th>Subject</th>
//                 <th>Date</th>
//                 <th>Search No</th>
//             </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <td>1</td>
//             <td>첫번째 게시글입니다.</td>
//             <td>2020-10-25</td>
//             <td>6</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>두번째 게시글입니다.</td>
//             <td>2020-10-25</td>
//             <td>5</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>세번째 게시글입니다.</td>
//             <td>2020-10-25</td>
//             <td>1</td>
//           </tr>
//           <tr>
//             <td>4</td>
//             <td>네번째 게시글입니다.</td>
//             <td>2020-10-25</td>
//             <td>2</td>
//           </tr>
//           <tr>
//             <td>5</td>
//             <td>다섯번째 게시글입니다.</td>
//             <td>2020-10-25</td>
//             <td>4</td>
//           </tr>
//         </tbody>
//     </table>
//     </>
//   )
// }

// export default PostList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../table/CommonTable';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { postList } from '../../Data';

// const PostList = props => {
//   return (
//     <>
//       <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
//         <CommonTableRow>
//           <CommonTableColumn>1</CommonTableColumn>
//           <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>6</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>2</CommonTableColumn>
//           <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>5</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>3</CommonTableColumn>
//           <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>1</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>4</CommonTableColumn>
//           <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>2</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>5</CommonTableColumn>
//           <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>4</CommonTableColumn>
//         </CommonTableRow>
//       </CommonTable>
//     </>
//   )
// }
 
// const PostList = props => {
//     const [dataList , setDataList] = useState([]);
//     useEffect(() =>{
//         setDataList(postList);
//     },[ ])
//     return (
//         <>
//       <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
//         {
//           dataList ? dataList.map((item, index) => {
//             return (
//               <CommonTableRow key={index}>
//                 <CommonTableColumn>{ item.no }</CommonTableColumn>
//                 <CommonTableColumn>{ item.title }</CommonTableColumn>
//                 <CommonTableColumn>{ item.createDate }</CommonTableColumn>
//                 <CommonTableColumn>{ item.readCount }</CommonTableColumn>
//               </CommonTableRow>
//             )
//           }) : ''
//         }
//       </CommonTable>
//     </>
//     )
// }

// 조회 버튼, 검색 기능, Rest API,
const PostList = props => {
  const [dataList , setDataList] = useState([]);
  useEffect(() =>{
      setDataList(postList);
  },[ ])
  function onClickEvent(no){
    console.log(no);
    return no;
  }
  return (
      <>
    <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
      {
        dataList ? dataList.map((item, index) => {
          return (
            <CommonTableRow key={index}>
              <CommonTableColumn>{ item.no }</CommonTableColumn>
              <CommonTableColumn>
                <Link to={"/postView/"+item.no}>{ item.title }</Link>
                </CommonTableColumn>
              <CommonTableColumn>{ item.createDate }</CommonTableColumn>
              <CommonTableColumn>{ item.readCount }</CommonTableColumn>
              
            </CommonTableRow>
          )
        }) : ''
      }
      
      <textarea id="text"/>
      
  <button onClick={onClickEvent(dataList.no)}>조회</button>
    </CommonTable>
  </>
  )
}
export default PostList;