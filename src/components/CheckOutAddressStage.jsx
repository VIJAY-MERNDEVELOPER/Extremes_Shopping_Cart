import React, { useEffect, useState } from "react";
import { useGetAddressQuery } from "../app/features/addressFeatures/addressApiSlice";
import AddressForm from "./AddressForm";
import {
  useUpdateAddressMutation,
  useGetOrderQuery,
} from "../app/features/orderFeatures/orderApiSlice";
import { useParams } from "react-router-dom";
import { Add } from "@mui/icons-material";

function CheckOutAddressStage() {
  const { orderId } = useParams();
  const { data: addressData } = useGetAddressQuery();

  const { address = [], message } = addressData || {};
  const [addAddress] = useUpdateAddressMutation();

  const {
    data: orderData,
    isLoading,
    isSuccess,
    isError,
  } = useGetOrderQuery(orderId);
  const { order, shippingAddress } = orderData || {};

  // console.log(shippingAddress);

  const [deliverAddress, setDeliveryAddress] = useState();

  // const { addres = [], message } = newData || {};
  // console.log(addres);

  useEffect(() => {
    setDeliveryAddress(address);
  }, [address]);

  return (
    <>
      <div className="d-flex flex-column  mb-2 p-0">
        <div className="row mb-2 bg-primary p-2" style={{ margin: 0 }}>
          <div className="col-8 col-sm-8">
            <span className="badge text-bg-secondary me-3">2</span>
            <span className="text-white fw-bold">DELIVERY ADDRES</span>
          </div>
          <div className="col-2 col-sm-4 text-end">
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#addressList"
              aria-expanded="false"
              aria-controls="addressList"
              className="btn btn-outline-light rounded-0  fw-bold"
              style={{ fontSize: "0.7rem" }}
            >
              CHANGE
            </button>
          </div>{" "}
          <div
            className="d-flex  p-0 my-1 text-white"
            style={{ fontSize: "0.8rem" }}
          >
            {shippingAddress && (
              <div className="row  px-3">
                <div className="d-flex gap-3 m-0">
                  <span>{shippingAddress?.name} </span>{" "}
                  <span> {shippingAddress?.contactNumber}</span>{" "}
                </div>{" "}
                <div className="col-sm-12">
                  <span> {shippingAddress?.street} </span>,
                  <span> {shippingAddress?.city}</span>,
                  <span> {shippingAddress?.state} </span> -
                  <span> {shippingAddress?.pincode}</span>
                </div>{" "}
              </div>
            )}
          </div>
        </div>{" "}
        <div
          className="row bg-white p-2 row-gap-3 collapse"
          id="addressList"
          style={{ margin: 0, fontSize: "0.85rem" }}
        >
          {deliverAddress?.map((addres) => {
            return (
              <div key={addres._id}>
                <div className="d-flex  gap-2 m-1 p-1">
                  <input
                    type="radio"
                    id={addres._id}
                    name="addres"
                    checked={addres?.isDefault}
                    onChange={() => {
                      setDeliveryAddress(
                        deliverAddress.map((delivery) => ({
                          ...delivery,
                          isDefault: delivery._id === addres._id,
                        }))
                      );
                    }}
                  />
                  <label htmlFor={addres._id}>
                    <div className="row ms-0">
                      <div className="d-flex  gap-3">
                        <span title="name"> {addres.name} </span>{" "}
                        <span title="contactNumber">
                          {addres.contactNumber}
                        </span>
                        <div className="col-1">
                          <button
                            className="btn btn-primary px-1 py-0"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Edit
                          </button>
                        </div>
                        {addres?.isDefault && (
                          <div className="col-sm-4 text-end">
                            <button
                              data-bs-toggle="collapse"
                              data-bs-target="#addressList"
                              className="btn btn-primary px-1 py-0"
                              style={{ fontSize: "0.8rem" }}
                              onClick={() =>
                                addAddress({ orderId, addressId: addres._id })
                              }
                            >
                              Deliver Here
                            </button>
                          </div>
                        )}
                      </div>{" "}
                      <div className="col-sm-9">
                        <span title="street"> {addres.street} </span>,
                        <span title="city"> {addres.city}</span>,
                        <span title="state"> {addres.state} </span> -
                        <span title="pincode"> {addres.pincode}</span>
                      </div>{" "}
                    </div>{" "}
                  </label>
                </div>{" "}
                <hr className="m-0" />
              </div>
            );
          })}{" "}
          <div className="row m-0">
            {" "}
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#addressFormCollapse"
              aria-expanded="false"
              aria-controls="addressFormCollapse"
              className="btn border border-2 px-1 py-0 fw-medium"
            >
              <Add /> ADD ADDRESS
            </button>
            <div
              className="collapse row bg-white p-2 row-gap-3 my-2 "
              style={{ marginLeft: "1px" }}
              id="addressFormCollapse"
            >
              <AddressForm />
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default CheckOutAddressStage;
