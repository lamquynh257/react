import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addPosts } from "../../redux/postSlice";
import PostsList from "./postsList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const posts = useSelector((state) => state.Posts);
  //console.log(posts);
  let [Posts, setPost] = useState({})
  const dispatch = useDispatch();
  dispatch(addPosts(Posts))
  useEffect( () => {
     axios({
      method: "GET",
      url: "/api/allpost",
      data: null,
    })
    .then((res) => {
      // console.log(res.data)
      setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
    <PostsList />
    </>
  )
}

export default Home;