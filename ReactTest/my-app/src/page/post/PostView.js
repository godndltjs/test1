// import React from 'react';

// const PostView = props => {
//     return (
//         <>
        
//         </>
//     )
// }
import React, {useEffect, useState} from 'react';
import {  getPostByNo, postList } from '../../Data'
import './Post.css' 
//import PostList from './PostList';
const PostView = ({history }) => {
    const [ data, setData] = useState({});
    const historyNum = history.location.pathname.substring(10,11);
    console.log(historyNum);
    const no = historyNum;//postList[1].no;
    console.log(history.location.pathname);
    // const { no } = postList[0].no; //postList.indexOf(0);
   
    console.log(postList);
   
    useEffect(() => {
      setData(getPostByNo(no));
    }, [no]); 
    console.log(no + "---------------------------------------" + data);
return(
    <>
    <h2 align="center">object Information</h2>

    <div className="post-view-wrapper">
        {
          no ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    
    </>
)
}


export default PostView;