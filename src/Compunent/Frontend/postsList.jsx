import React from 'react'
import { getAllPost } from "../../redux/postSlice"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PostsList() {
  const Posts = useSelector(getAllPost)
  console.log(Posts)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  console.log("start")
  return (
    <div>
      {console.log("content")}
    </div>
  )
}
