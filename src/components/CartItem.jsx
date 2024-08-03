/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { fetchProductData } from "../api/apiFetch";

function CartItem({ cart, setCart, products, setProducts }) {
  console.log(cart);
  console.log(products);
  // const [deliveryDate, setDeliveryDate] = useState();

  // const getDeliveryDate = (deliveryDays) => {
  //   const currentDate = new Date();

  //   currentDate.setDate(currentDate.getDate() + deliveryDays);
  //   let options = { year: "numeric", month: "long", day: "numeric" };
  //   let deliveryDate = currentDate.toLocaleDateString("en-US", options);
  //   console.log(deliveryDate);
  // };

  const product = products?.filter((item) => item.id === cart.product_id);
  // const price = product[0].price * cart.cart_quantity;

  // console.log(product);
  useEffect(() => {
    fetchProductData(setProducts);
    // getDeliveryDate(product[0]?.deliveryBy);
  }, []);

  return (
    <>
      {!product[0] ? (
        <span className="row justify-content-center align-items-center">
          ... Product Loading
        </span>
      ) : (
        <>
          <div
            className="container mb-3"
            style={{
              maxWidth: "100%",
              maxHeight: "240px",
              padding: "10px 10px",
            }}
          >
            <div className="row align-items-center" style={{ height: "100%" }}>
              <div className="col-3 " style={{ paddingRight: 0 }}>
                <input
                  type="checkbox"
                  name="selector"
                  id="cart-selector"
                  className="me-3"
                />{" "}
                <img
                  src={product[0]?.product_image_1}
                  alt={product[0]?.product_name}
                  width={"100"}
                  height={"100%"}
                />
              </div>
              <div className="col-7" style={{ padding: 0, margin: 0 }}>
                <span>
                  <img
                    src={product[0]?.brand_logo}
                    alt={product[0]?.product_brand}
                    width={"60px"}
                  />
                </span>
                <p style={{ margin: 5 }}>{product[0]?.product_name}</p>{" "}
                <div className="row">
                  <div className="col-3">
                    <span style={{ margin: 5 }}>In Stock</span>
                  </div>
                  <div className="col-8 text-center">
                    <span
                      style={{
                        fontSize: "0.9em",
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Delivery by 30
                    </span>
                  </div>
                </div>
                <p style={{ margin: 5 }}>
                  <span>
                    <b>Size:</b> M
                  </span>
                </p>
              </div>
              <div className="col-1">
                {" "}
                <div className="row">
                  {" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      opacity: 0.6,
                      fontSize: "0.9em",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{product[0]?.product_price}{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "1em",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{product[0]?.product_price}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="row align-items-center">
              <div className="col-2 ms-5">
                <label htmlFor="quantitySelector">
                  <b>Qty:</b>
                </label>
                <select
                  defaultValue={cart?.cart_quantity}
                  name="quantity"
                  id="quantitySelector"
                  style={{ width: "40px", borderRadius: 5, marginLeft: 10 }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="col-3 ms-1">
                <button className="btn ">Delete</button>
              </div>
              <div className="col-5 text-end mx-2">
                ₹ {product[0]?.product_price * cart?.cart_quantity}
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default CartItem;
