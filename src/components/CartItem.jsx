/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { fetchProductData } from "../api/apiFetch";

function CartItem({ cart, setCart, products, setProducts }) {
  console.log(cart);
  console.log(products);
  //   const [product, setProduct] = useState([]);

  const product = products?.filter((item) => item.id === cart.product_id);

  console.log(product);
  useEffect(() => {
    fetchProductData(setProducts);
  }, []);

  return (
    <>
      {!product[0] ? (
        <span className="row justify-content-center align-items-center">
          ... Product Loading
        </span>
      ) : (
        <div
          className="container mb-3"
          style={{
            maxHeight: "240px",
            padding: "10px 0",
          }}
        >
          <div className="row align-items-center">
            <div className="col-3">
              <input
                type="checkbox"
                name="selector"
                id="cart-selector"
                className="me-3"
              />{" "}
              <img
                src={product[0]?.product_image_1}
                alt={product[0]?.product_name}
                width={"150"}
                height={"70%"}
              />
            </div>
            <div className="col-7">
              <span>
                <img
                  src={product[0]?.brand_logo}
                  alt={product[0]?.product_brand}
                  width={"100px"}
                />
              </span>
              <p>{product[0]?.product_name}</p> <p>In Stock</p>
              <p>
                <span>
                  <b>Size:</b> M
                </span>
              </p>
              <p>
                <span>
                  <b>Color:</b> Red
                </span>
              </p>
              <div className="row align-items-center">
                <div className="col-3">
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
                <div className="col-3">
                  <button className="btn ">Delete</button>
                </div>
              </div>
            </div>
            <div className="col-1">
              {" "}
              <span>₹{product[0]?.product_price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
