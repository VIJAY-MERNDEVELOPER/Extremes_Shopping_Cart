/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { fetchProductData } from "../api/apiFetch";
import { useGetProductQuery } from "../app/features/productFeatures/productApiSlice";
import { discountedPrice } from "../utils/utils";
import {
  useDeleteCartProductMutation,
  useUpdateCartQuantityMutation,
} from "../app/features/cartFeatures/cartApiSlice";
import "./styles/cartItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({ cart }) {
  const { _id: cartId } = cart;

  const { data: product, refetch } = useGetProductQuery(cart.productId);

  const [cartQuantity, setCartQuantity] = useState();

  const [deleteCartProduct] = useDeleteCartProductMutation();
  const [updateCartQuantity, { isSuccess, isError }] =
    useUpdateCartQuantityMutation();

  const handleUpdate = async (e) => {
    setCartQuantity(e.target.value);
    console.log(e.target.value);
    await updateCartQuantity({ cartId, quantity: e.target.value });
  };

  // const {data}

  // const [deliveryDate, setDeliveryDate] = useState();

  // const getDeliveryDate = (deliveryDays) => {
  //   const currentDate = new Date();

  //   currentDate.setDate(currentDate.getDate() + deliveryDays);
  //   let options = { year: "numeric", month: "long", day: "numeric" };
  //   let deliveryDate = currentDate.toLocaleDateString("en-US", options);
  //   console.log(deliveryDate);
  // };

  // const product = products?.filter((item) => item.id === cart.product_id);
  // const price = product[0].price * cart.cart_quantity;

  // console.log(product);
  useEffect(() => {
    setCartQuantity(cart.quantity);

    // getDeliveryDate(product[0]?.deliveryBy);
  }, [cart]);

  return (
    <>
      {!product ? (
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
                  src={`http://localhost:3001/${product?.productImages[0].filename}`}
                  alt={product?.productName}
                  width={"100"}
                  height={"100%"}
                  className="img-fluid"
                />
              </div>
              <div className="col-7" style={{ padding: 0, margin: 0 }}>
                <span>
                  <h3>{product.productBrand}</h3>
                  {/* <img
                    src={product[0]?.brand_logo}
                    alt={product[0]?.product_brand}
                    width={"60px"}
                  /> */}
                </span>
                <p style={{ margin: 5 }}>{product.productName}</p>{" "}
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
                    <b>Size:</b> {cart.size}
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
                    ₹{product.productPrice}{" "}
                  </span>
                  <span
                    style={{
                      fontSize: "1em",
                      fontWeight: "bold",
                    }}
                  >
                    ₹
                    {discountedPrice(
                      product.productPrice,
                      product.discountPercentage
                    )}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="row align-items-center">
              <div className="col-3 mt-2">
                <div className="d-flex justify-content-center gap-1">
                  <button
                    className=" rounded-circle btn-style border "
                    onClick={() => {
                      cartQuantity !== 0 && setCartQuantity((prev) => --prev);
                      updateCartQuantity({
                        cartId,
                        quantity: cartQuantity - 1,
                      });
                    }}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="number"
                    min={0}
                    max={product?.stocks[cart?.quantity]}
                    className=" form-control-color custom-input text-center border border-2 fw-medium"
                    id="exampleColorInput"
                    value={cartQuantity}
                    onChange={(e) => {
                      handleUpdate(e);
                    }}
                  />{" "}
                  <button
                    className=" rounded-circle btn-style text-center border"
                    onClick={() => {
                      setCartQuantity((prev) => ++prev);
                      updateCartQuantity({
                        cartId,
                        quantity: cartQuantity + 1,
                      });
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
              {/* <div className="col-2 ms-5">
                <label htmlFor="quantitySelector">
                  <b>Qty:</b>
                </label>
                {
                  <select
                    defaultValue={cart?.quantity}
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
                }
              </div> */}
              <div className="col-3 ms-1">
                <button
                  className="btn "
                  onClick={() => deleteCartProduct(cart._id)}
                >
                  Delete
                </button>
              </div>
              <div className="col-5 text-end mx-2">
                ₹{" "}
                {discountedPrice(
                  product.productPrice,
                  product.discountPercentage
                ) * cart?.quantity}
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default CartItem;
