
import React, {useEffect, useState} from 'react';
import {  getPostById, postList } from '../../Data'
import './Post.css'
//import PostList from './PostList';
//					
const PostView = ({history,match }) => {
    const [ data, setData] = useState({});
    
    const { id } = match.params;

   
    useEffect(() => {
      setData(getPostById(id));
    }, [id]);
    console.log(id + " = id");
return(
    <>
    <h2 align="center">Member information</h2>

    <div className="post-view-wrapper">
        {
          id ? (
            <>
              <div className="post-view-row">
                <label>ID</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>이름</label>
                <label>{ data.name }</label>
              </div>
              <div className="post-view-row">
                <label>휴대전화번호</label>
                <label>{ data.phone }</label>
              </div>
              <div className="post-view-row">
                <label>이메일</label>
                <label>{ data.email }</label>
              </div>
              <div className="post-view-row">
                <label>소속</label>
                <label>{data.department}
                </label>
              </div>
              <div className="post-view-row">
                <label>최종접속일</label>
                <label>{data.lastDate}
                </label>
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