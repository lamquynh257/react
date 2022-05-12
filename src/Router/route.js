import React, { Component, useState } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import HomeBackend from '../Compunent/Backend/home';
import Devices from '../Compunent/Backend/devices';
import Layout from '../Compunent/Backend/layoutAdmin';
import NoPage from '../Compunent/Backend/notfound';
import Users from '../Compunent/Backend/User/user';
import LayoutFrontend from '../Compunent/Frontend/layoutFrontend';
import HomeFrontend from '../Compunent/Frontend/home';
import Login from '../Compunent/Backend/login';
import Post from '../Compunent/Frontend/post';
import Posttest from '../Compunent/Frontend/post1';

class route extends Component {
    render() {
        return (
            <Routes>
                <Route path="/admin" element={<Login />}>
                    <Route index element={<HomeBackend />} />
                    <Route path="device" element={<Devices />} />
                    <Route path="user" element={<Users />} />
                    <Route path="user/create" element={<Users />} />
                    <Route path="user/edit/:id" element={<Users />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="/" element={<LayoutFrontend />}>
                    <Route index element={<HomeFrontend />} />
                    <Route path="posttest/:id" element={<Posttest />} />
                    <Route path="post/:id" element={<Post />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        );
    }
}

export default route;