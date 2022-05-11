import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './template/header';
import Footer from './template/footer';

class layoutFrontend extends Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default layoutFrontend;