import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomeBackend from "../Compunent/Backend/home";
import PostBackend from "../Compunent/Backend/Post/post";
import NoPage from "../Compunent/Backend/notfound";
import Users from "../Compunent/Backend/User/user";
import LayoutFrontend from "../Compunent/Frontend/layoutFrontend";
import HomeFrontend from "../Compunent/Frontend/home";
import Login from "../Compunent/Backend/login";
import Post from "../Compunent/Frontend/post";
import AddPost from "../Compunent/Backend/Post/createPost";
import Cart from "../Compunent/Frontend/cart";

class route extends Component {
  render() {
    return (
      <Routes>
        <Route path="/admin" element={<Login />}>
          <Route index element={<HomeBackend />} />
          <Route path="post" element={<PostBackend />} />
          <Route path="user" element={<Users />} />
          <Route path="user/create" element={<Users />} />
          <Route path="user/edit/:id" element={<Users />} />
          <Route path="post/add" element={<AddPost />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/" element={<LayoutFrontend />}>
          <Route index element={<HomeFrontend />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    );
  }
}

export default route;
