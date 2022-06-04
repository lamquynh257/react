import { Link } from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";

export default function Header() {
  const Products = useSelector((state) => state.Carts.Products)
  // console.log(Products.length)
  return (
    <>
        <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar menu-bg shadow-none">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img className="ntl-logo" src="img/logo.png" alt />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <Link to="/" className="nav-link page-scroll active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#services">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#product">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                <Link to={{
    pathname: "/cart",
    hash: "#cart",
  }}>
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{Products.length ? (Products.length) : (0)}</span>
          </span>
        </div>
      </Link>
                </li>
                <li className="nav-item">
                  <a className="btn btn-singin" href="#">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

