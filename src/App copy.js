import React, { Component } from 'react';
import './App.css';
import Header from './Compunent/Backend/template/header';
import Footer from './Compunent/Backend/template/footer';
import Sidebar from './Compunent/Backend/template/sidebar';
import Route from './Router/route';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Route />
        <Footer />
      </div>
    );
  }
}

export default App;
