import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../redux/postSlice";
import { getUsers } from "../../redux/userSlice";
import { getProducts } from "../../redux/productSlice";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Posts = useSelector((state) => state.Posts);
  const Users = useSelector((state) => state.Users);
  const Products = useSelector((state) => state.Products);
  //console.log(Posts);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    dispatch(getProducts());
  }, []);

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
    document.documentElement.scrollTop = 0;
  };
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
                  <h2 className="head-title">
                    Handcrafted Web Template <br />
                    For Business and Startups
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab{" "}
                    <br />
                    dolores ea fugiat nesciunt quisquam.
                  </p>
                  <div className="header-button">
                    <a href="#" className="btn btn-border-filled">
                      Get Started
                    </a>
                    <a href="#contact" className="btn btn-border page-scroll">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 p-0">
                <div className="intro-img">
                  <img
                    src="https://preview.uideck.com/items/slick/business/img/intro.png"
                    alt
                  />
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
                  <img
                    src="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
                    class="icon"
                  ></img>
                  <h4>Bootstrap 4</h4>
                  <p>
                    Share processes and data secure lona need to know basis Our
                    team assured your web site is always safe.
                  </p>
                </div>
              </div>
              {/* End Col */}
              {/* Start Col */}
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="services-item text-center">
                  <img
                    src="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
                    class="icon"
                  ></img>
                  <h4>Slick Design</h4>
                  <p>
                    Share processes and data secure lona need to know basis Our
                    team assured your web site is always safe.
                  </p>
                </div>
              </div>
              {/* End Col */}
              {/* Start Col */}
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="services-item text-center">
                  <img
                    src="https://hrmcdn-13a1c.kxcdn.com/images/hr-hk/content-images/work_tech6.jpg"
                    class="icon"
                  ></img>
                  <h4>Crafted with Love</h4>
                  <p>
                    Share processes and data secure lona need to know basis Our
                    team assured your web site is always safe.
                  </p>
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
                  <img
                    src="img/business/business-img.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              {/* End Col */}
              {/* Start Col */}
              <div className="col-lg-6 col-md-12 pl-4">
                <div className="business-item-info">
                  <h3>Crafted For Business, Startup and Agency Websites</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do <br /> tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim <br /> veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea <br />{" "}
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate <br /> velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <a className="btn btn-common" href="#">
                    download
                  </a>
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
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do <br /> eiusmod tempor incididunt ut labore
                        et dolore.
                      </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
                    <p>
                      Producing long lasting organic SEO results for <br />{" "}
                      brand of different kinds for more than a decade,
                      <br /> we understand that’s your.
                    </p>
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
        {/* Product Section */}
        <section id="product" className="">
          {/* Container Starts */}
          <div className="container">
            {/* Start Row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-text section-header text-center">
                  <div>
                    <h2 className="section-title">Producs Special</h2>
                    <div className="desc-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </p>
                      <p>eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Start Row */}

            <Slider {...settings}>
              {Products.Products.map((product, i) => {
                let id = product.id;
                return (
                  <>
                    <section id="blog">
                      <div className="container">
                        <div className="product-item">
                          <div className="card blog-item-wrapper product-cart">
                            <div className="card-top blog-item-img">
                              <img
                                src={product.image}
                                className="img-fluid product-img"
                              />
                            </div>
                            <div className="card-title blog-item-text">
                              <h3>
                                <Link to={"/post/" + product.id}>
                                  {product.name}
                                </Link>
                              </h3>
                              <p class="ntl-post-content">{product.desc}</p>
                            </div>
                            {/* <div className="card-content"> */}
                            {/* </div> */}
                            <div className="author">
                              <span className="name">
                                <i className="lni-user" />
                                <a href="#">Price {product.price}</a>
                              </span>
                              <span className="date float-right">
                                <i className="lni-calendar" />
                                <a
                                  type="button"
                                  className="btn btn-primary"
                                  style={{ color: "white" }}
                                  onClick={() => handleAddToCard(product)}
                                >
                                  Buy
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                );
              })}
            </Slider>
            {/* End Row */}
          </div>
        </section>
        {/* blog Section End */}
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
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </p>
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
              {Users.Users.map((user, index) => {
                return (
                  <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="single-team">
                      <div className="team-thumb">
                        <img src={user.image} className="img-fluid" alt />
                      </div>
                      <div className="team-details">
                        <div className="team-social-icons">
                          <ul className="social-list">
                            <li>
                              <a href="#">
                                <i className="lni-facebook-filled" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="lni-twitter-filled" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="lni-google-plus" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="team-inner text-center">
                          <h5 className="team-title">{user.username}</h5>
                          <p>{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

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
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </p>
                      <p>eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Start Row */}

            <Slider {...settings}>
              {Posts.Posts.map((post, i) => {
                let id = post.id;
                return (
                  <>
                    <section id="blog">
                      <div className="container">
                        <div className="blog-item">
                          <div className="card blog-item-wrapper">
                            <div className="card-top blog-item-img">
                              <img
                                src={post.post_image}
                                className="img-fluid"
                              />
                            </div>
                            <div className="card-title blog-item-text">
                              <h3>
                                <Link to={"/post/" + post.id}>
                                  {post.post_title}
                                </Link>
                              </h3>
                              <p class="ntl-post-content">
                                {post.post_content}
                              </p>
                            </div>
                            {/* <div className="card-content"> */}
                            {/* </div> */}
                            <div className="author">
                              <span className="name">
                                <i className="lni-user" />
                                <a href="#">Posted by {post.post_author}</a>
                              </span>
                              <span className="date float-right">
                                <i className="lni-calendar" />
                                <a href="#">{post.post_date}</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                );
              })}
            </Slider>
            {/* End Row */}
          </div>
        </section>
        {/* blog Section End */}
      </div>
    </>
  );
};

export default Home;
