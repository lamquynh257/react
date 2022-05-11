import React, { Component } from 'react';
import axios from 'axios';

export default class post extends Component {
  
  render() {
      let {Posts} = this.state
    return (
      <div>
          <header id="home" className="hero-area">    
    <div className="overlay">
      <span />
      <span />
    </div>
    <div className="container">      
      <div className="row space-100">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">Handcrafted Web Template <br />For Business and Startups</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab <br />dolores ea fugiat nesciunt quisquam.</p>
            <div className="header-button">
              <a href="#" className="btn btn-border-filled">Get Started</a>
              <a href="#contact" className="btn btn-border page-scroll">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 p-0">
          <div className="intro-img">
            <img src="https://preview.uideck.com/items/slick/business/img/intro.png" alt />
          </div>            
        </div>
      </div> 
    </div>             
  </header>
  <div>
      NTL 
  </div>
    </div>
    )
  }
}
