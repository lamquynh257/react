import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decreaseCart, addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import Animation from "../animation";
import "./cart.css";

function Cart() {
  const carts = useSelector((state) => state.Carts.Products);
  const dispatch = useDispatch();
  // console.log(carts);
  const handleAddToCard = (cart) => {
    dispatch(addToCart(cart));
  };
  const handleRemoveFromCart = (cart) => {
    // console.log(cart);
    dispatch(removeFromCart(cart));
  };
  const handleDecreaseCart = (cart) => {
    dispatch(decreaseCart(cart));
  };
  return (
    <Animation>
      <div className="container ntl-post">
        <div className="row justify-content-md-center post-thumb">
          {/* <img src={post.post_image} /> */}
        </div>

        <div className="row justify-content-md-center blog-post">
          {carts.length === 0 ? (
            <>
              <section
                id="cart"
                className="h-100 h-custom"
                style={{ backgroundColor: "#d2c9ff" }}
              >
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                      <div
                        className="card card-registration card-registration-2"
                        style={{ borderRadius: 15 }}
                      >
                        <div className="card-body p-0">
                          <div className="row g-0">
                            <div className="col-lg">
                              <div className="p-5">
                                <div className="d-flex justify-content-between align-items-center mb-5">
                                  <h1 className="fw-bold mb-0 text-black">
                                    Shopping Cart
                                  </h1>
                                </div>

                                <hr className="my-4" />
                                <div className="row d-flex justify-content-center align-items-center">
                                  <h1>Không có sản phẩm nào!!!</h1>
                                </div>
                                <div className="back-shop">
                                  <Link
                                    to={{
                                      pathname: "/productlist",
                                      hash: "#product",
                                    }}
                                    className="text-body"
                                  >
                                    <i className="fas fa-long-arrow-alt-left me-2" />
                                    Back to shop
                                  </Link>
                                </div>
                                <hr className="my-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <section
                id="cart"
                className="h-100 h-custom"
                style={{ backgroundColor: "#d2c9ff" }}
              >
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                      <div
                        className="card card-registration card-registration-2"
                        style={{ borderRadius: 15 }}
                      >
                        <div className="card-body p-0">
                          <div className="card_body g-0">
                            <div className="col-lg-8">
                              <div className="p-5">
                                <div className="d-flex justify-content-between align-items-center mb-5">
                                  <h1 className="fw-bold mb-0 text-black">
                                    Shopping Cart
                                  </h1>
                                  <h6 className="mb-0 text-muted">
                                    {carts.length} items
                                  </h6>
                                </div>

                                {carts.map((cart) => (
                                  <>
                                    <hr className="my-4" />
                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                      <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img
                                          src={cart.image}
                                          className="img-fluid rounded-3"
                                          alt=""
                                        />
                                      </div>

                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                        <h6 className="text-muted">
                                          {cart.name}
                                        </h6>
                                        <h6 className="text-black mb-0">DES</h6>
                                      </div>

                                      <div className="cart-product-quantity">
                                        <button
                                          onClick={() =>
                                            handleDecreaseCart(cart)
                                          }
                                        >
                                          -
                                        </button>
                                        <div className="count">
                                          {cart.cartQuantity}
                                        </div>
                                        <button
                                          onClick={() => handleAddToCard(cart)}
                                        >
                                          +
                                        </button>
                                      </div>

                                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h6 className="mb-0">
                                          ${cart.price * cart.cartQuantity}
                                        </h6>
                                      </div>
                                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a
                                          type="button"
                                          onClick={() =>
                                            handleRemoveFromCart(cart)
                                          }
                                          className="text-muted"
                                        >
                                          <i className="fas fa-times" />
                                        </a>
                                      </div>
                                    </div>
                                    <hr className="my-4" />
                                  </>
                                ))}

                                <div className="pt-5">
                                  <h6 className="mb-0">
                                    <Link
                                      to={{
                                        pathname: "/productlist",
                                        hash: "#product",
                                      }}
                                      className="text-body"
                                    >
                                      <i className="fas fa-long-arrow-alt-left me-2" />
                                      Back to shop
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 bg-grey">
                              <div className="p-5">
                                <h3 className="fw-bold mb-5 mt-2 pt-1">
                                  Summary
                                </h3>
                                <hr className="my-4" />
                                <div className="d-flex justify-content-between mb-2">
                                  <h5 className="text-uppercase">items 3</h5>
                                  <h5 className="ml-5">$ 100,000</h5>
                                </div>

                                <h5 className="text-uppercase mb-3">
                                  Shipping
                                </h5>
                                <div className="mb-4 pb-2">
                                  <select className="select">
                                    <option value={1}>
                                      Standard-Delivery- €5.00
                                    </option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Four</option>
                                  </select>
                                </div>

                                <hr className="my-4" />
                                <div className="d-flex justify-content-between mb-5">
                                  <h5 className="text-uppercase">
                                    Total price
                                  </h5>
                                  <h5>€ 137.00</h5>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-block btn-lg"
                                  data-mdb-ripple-color="dark"
                                >
                                  Register
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </Animation>
  );
}
export default Cart;
