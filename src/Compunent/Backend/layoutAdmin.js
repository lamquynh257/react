import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './template/header';
import Sidebar from './template/sidebar';
import Footer from './template/footer';


class layoutAdmin extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            showLayout: false,
        }
    }
    render() {
        return (
            <div>
                <Header logout={this.props.onLogout} />
                <Sidebar logout={this.props.onLogout} />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default layoutAdmin;