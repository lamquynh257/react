import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './post1';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      Posts: []
    }
  }
  
  async componentDidMount(){
    await axios({
      method: 'GET',
      url: '/api/alluser',
      data: null
    }).then(res => {
      //console.log(res)
      this.setState({
        Users: res.data
      });
    }).catch(err => {
      console.log(err)
    });

    //Posts
    await axios({
      method: 'GET',
      url: '/api/allpost',
      data: null
    }).then(res => {
      //console.log(res)
      this.setState({
        Posts: res.data
      });
    }).catch(err => {
      console.log(err)
    });

  }



    render() {
      let { Users } = this.state
      let { Posts } = this.state
        return (
            <div>
          
          <div>
  {/* Header Section Start */}
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
  {/* Header Section End */} 
  {/* Services Section Start */}
  <section id="services" className="section">
    <div className="container">
      <div className="row">
        {/* Start Col */}
        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i className="lni-cog" />
            </div>
            <h4>Bootstrap 4</h4>
            <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
          </div>
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i className="lni-brush" />
            </div>
            <h4>Slick Design</h4>
            <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
          </div>
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-4 col-md-6 col-xs-12">
          <div className="services-item text-center">
            <div className="icon">
              <i className="lni-heart" />
            </div>
            <h4>Crafted with Love</h4>
            <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Business Plan Section Start */}
  <section id="business-plan">
    <div className="container">
      <div className="row">
        {/* Start Col */}
        <div className="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
          <div className="business-item-img">
            <img src="img/business/business-img.png" className="img-fluid" alt />
          </div>
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-12 pl-4">
          <div className="business-item-info">
            <h3>Crafted For Business, Startup and Agency Websites</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate <br /> velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a className="btn btn-common" href="#">download</a>
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
  </section>
  {/* Business Plan Section End */}
  {/* Cool Fetatures Section Start */}
  <section id="features" className="">
    <div className="container">
      {/* Start Row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="features-text section-header text-center">  
            <div>   
              <h2 className="section-title">Services We Provide</h2>
              <div className="desc-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Start Row */}
      <div className="row featured-bg">
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item featured-border1">
            <div className="feature-icon float-left">
              <i className="lni-coffee-cup" />
            </div>
            <div className="feature-info float-left">
              <h4>Easy to Customize</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item featured-border2">
            <div className="feature-icon float-left">
              <i className="lni-briefcase" />
            </div>
            <div className="feature-info float-left">
              <h4>Business Template</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item featured-border1">
            <div className="feature-icon float-left">
              <i className="lni-invention" />
            </div>
            <div className="feature-info float-left">
              <h4>Clean &amp; Trendy Design</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item featured-border2">
            <div className="feature-icon float-left">
              <i className="lni-layers" />
            </div>
            <div className="feature-info float-left">
              <h4>Tons of Sections</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item featured-border3">
            <div className="feature-icon float-left">
              <i className="lni-reload" />
            </div>
            <div className="feature-info float-left">
              <h4>Free Future Updates</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
        {/* Start Col */}
        <div className="col-lg-6 col-md-6 col-xs-12 p-0">
          {/* Start Fetatures */}
          <div className="feature-item">
            <div className="feature-icon float-left">
              <i className="lni-support" />
            </div>
            <div className="feature-info float-left">
              <h4>Premier Support</h4>
              <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
            </div>
          </div>
          {/* End Fetatures */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
  </section>
  {/* Cool Fetatures Section End */} 
 


  {/* Team section Start */}
  <section id="team" className="section">
    <div className="container">
      {/* Start Row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="team-text section-header text-center">  
            <div>   
              <h2 className="section-title">Team Members</h2>
              <div className="desc-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
                <p>eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Start Row */}
      <div className="row">
        {/* Start Col */}
        {
          Users.map((user, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="single-team">
                <div className="team-thumb">
                  <img src={user.image} className="img-fluid" alt />
                </div>
                <div className="team-details">
                  <div className="team-social-icons">
                    <ul className="social-list">
                      <li><a href="#"><i className="lni-facebook-filled" /></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" /></a></li>
                      <li><a href="#"><i className="lni-google-plus" /></a></li>
                    </ul>
                  </div> 
                  <div className="team-inner text-center">
                    <h5 className="team-title">{user.username}</h5>
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
        
        {/* Start Col */}
        
      </div>
      {/* End Row */}
    </div>
  </section>
  {/* Team section End */}
  {/* Blog Section */}
  <section id="blog" className="">
    {/* Container Starts */}
    <div className="container">
      {/* Start Row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-text section-header text-center">  
            <div>   
              <h2 className="section-title">Latest Blog Posts</h2>
              <div className="desc-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>  
                <p>eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      {/* End Row */}
      {/* Start Row */}
      
          
      <div className="row">
      {Posts.map((post, i) => {
        let id = post.id
          return (
            <>
        {/* Start Col */}
        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
          {/* Blog Item Starts */}
          <div className="blog-item-wrapper">
            <div className="blog-item-img">
              <Link to={'/post/' + post.id}>
                <img src={post.post_image} className="img-fluid" alt />
              </Link>             
            </div>
            <div className="blog-item-text"> 
              <h3><a href="single-post.html">{post.post_title}  <br />Tin tức</a></h3>
              <p class="ntl-post-content">{post.post_content}</p>
              <a href className="read-more">5 Min read</a>
            </div>
            <div className="author">
              <span className="name"><i className="lni-user" /><a href="#">Posted by {post.post_author}</a></span>
              <span className="date float-right"><i className="lni-calendar" /><a href="#">10 April, 2020</a></span>
            </div>
            
          </div>
          {/* Blog Item Wrapper Ends*/}
        </div>
        {/* End Col */}
        </>
        )
    })}
      </div>
      
      {/* End Row */}
    </div>
  </section>
  {/* blog Section End */}
  {/* Contact Us Section */}
  <section id="contact" className="section">
    {/* Container Starts */}
    <div className="container">
      
    </div>
  </section>
  {/* Contact Us Section End */}
</div>




            </div>
        );
    }
}

export default index;