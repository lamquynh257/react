import React from "react";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux"

function Post() {
  
  const posts = useSelector((state) => state.Posts.post_title);
  console.log(posts);
  let [post, setPost] = useState({})
  let {id} = useParams()
  useEffect( () => {
     axios({
      method: 'GET',
      url: '/api/getpost',
      params: {id}
    }).then(res => {
      //console.log(res.data)
      setPost(res.data)
      
      
    }).catch(err => {
      console.log(err)
    });
  }, [])
 
  
 
  return (
     <div className="container ntl-post">
       
       
<div className="row justify-content-md-center post-thumb" >

<img src={post.post_image} />
</div>
       
     <div className="row justify-content-md-center blog-post">
       
     
          
          
        <div className="ntl-title">
          {post.post_title}
          </div>
          <div className="post-content">
          {post.post_content}
          </div>
          <div className="ntl-author">
          Tác giả: {post.post_author}
          </div>
          
    </div>
  </div>
    )
  
}
export default Post