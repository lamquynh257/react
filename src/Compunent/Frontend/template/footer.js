import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <>
        {/* Footer Section Start */}
        <footer>
          {/* Footer Area Start */}
          <section id="footer-Content">
            <div className="container">
              {/* Start Row */}
              <div className="row">
                {/* Start Col */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="footer-logo">
                    <img src="img/logo.png" alt />
                  </div>
                </div>
                {/* End Col */}
                {/* Start Col */}
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="widget">
                    <h3 className="block-title">Company</h3>
                    <ul className="menu">
                      <li>
                        <a href="#"> - About Us</a>
                      </li>
                      <li>
                        <a href="#">- Career</a>
                      </li>
                      <li>
                        <a href="#">- Blog</a>
                      </li>
                      <li>
                        <a href="#">- Press</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Col */}
                {/* Start Col */}
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="widget">
                    <h3 className="block-title">Product</h3>
                    <ul className="menu">
                      <li>
                        <a href="#"> - Customer Service</a>
                      </li>
                      <li>
                        <a href="#">- Enterprise</a>
                      </li>
                      <li>
                        <a href="#">- Price</a>
                      </li>
                      <li>
                        <a href="#">- Scurity</a>
                      </li>
                      <li>
                        <a href="#">- Why SLICK?</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Col */}
                {/* Start Col */}
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="widget">
                    <h3 className="block-title">Download App</h3>
                    <ul className="menu">
                      <li>
                        <a href="#"> - Android App</a>
                      </li>
                      <li>
                        <a href="#">- IOS App</a>
                      </li>
                      <li>
                        <a href="#">- Windows App</a>
                      </li>
                      <li>
                        <a href="#">- Play Store</a>
                      </li>
                      <li>
                        <a href="#">- IOS Store</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Col */}
                {/* Start Col */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                  <div className="widget">
                    <h3 className="block-title">Subscribe Now</h3>
                    <p>
                      Appropriately implement calysts for change visa wireless
                      catalysts for change.{" "}
                    </p>
                    <div className="subscribe-area">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <span>
                        <i className="lni-chevron-right" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* Copyright Start  */}
            <div className="copyright">
              <div className="container">
                {/* Star Row */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="site-info text-center">
                      <p>
                        Crafted by{" "}
                        <a href="https://ntlam.gq" rel="nofollow">
                          NTL
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* Copyright End */}
          </section>
          {/* Footer area End */}
        </footer>
        {/* Footer Section End */}
      </>
    );
  }
}

export default footer;
