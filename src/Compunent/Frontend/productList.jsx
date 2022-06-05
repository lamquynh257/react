import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import Animation from "../animation";
import "./productList.css";

export default function ProductList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  //   console.log(Products);
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Animation>
        <div id="product" className="container ntl-post">
          <section className="title-productlist d-flex justify-content-between">
            <h1>Product List</h1>
            <input
              placeholder="Search..."
              className="search-product"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </section>
          <div className="row post-thumb">
            {Products.Products.filter((val) => {
              //console.log(val);
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((product, i) => {
              return (
                <>
                  <section key={product.id} id="blog" className="blog-ntl">
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
          </div>
        </div>
      </Animation>
    </>
  );
}
