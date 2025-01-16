import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import {
  useAddAddressMutation,
  useGetAddressQuery,
} from "../app/features/addressFeatures/addressApiSlice";

function AddressForm() {
  const [addAddress, { isSuccess, isError: isAddAddressError }] =
    useAddAddressMutation();

  const form = useForm({
    defaultValues: {
      name: "",
      contactNumber: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      isDefault: false,
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
  } = form;

  const handleAdd = async (addressData) => {
    // console.log(addressData);
    const res = await addAddress(addressData);
    console.log(res);
  };

  useEffect(() => {
    if (isSuccess) {
      // refetch();
      reset();
    }
  }, [isSuccess]);

  return (
    <form
      className="d-flex flex-column gap-3  "
      onSubmit={handleSubmit(handleAdd)}
    >
      <div className="row ">
        {" "}
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control "
            id="inputName"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />{" "}
          <label htmlFor="inputName">
            Name<span className="asterik">&#42;</span>
          </label>{" "}
          <p>{errors.name?.message}</p>
        </div>{" "}
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputMobile"
            {...register("contactNumber", {
              required: { value: true, message: "Number is required" },
            })}
          />
          <label htmlFor="inputMobile">
            Mobile Number<span className="asterik">&#42;</span>
          </label>
          <p>{errors.contactNumber?.message}</p>
        </div>
      </div>{" "}
      <div className="row ">
        {" "}
        <div className="form-floating col-md-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            {...register("street", {
              required: { value: true, message: "Address is required" },
            })}
          />
          <label htmlFor="inputAddress">
            Address<span className="asterik">&#42;</span>
          </label>
          <p>{errors.street?.message}</p>
        </div>{" "}
      </div>
      <div className="row ">
        {" "}
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            {...register("city", {
              required: { value: true, message: "City is required" },
            })}
          />
          <label htmlFor="inputCity">
            City<span className="asterik">&#42;</span>
          </label>
          <p>{errors.city?.message}</p>
        </div>{" "}
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputState"
            {...register("state", {
              required: { value: true, message: "State is required" },
            })}
          />
          <label htmlFor="inputState">
            State<span className="asterik">&#42;</span>
          </label>
          <p>{errors.state?.message}</p>
        </div>
      </div>
      <div className="row ">
        {" "}
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputCountry"
            {...register("country")}
          />
          <label htmlFor="inputCountry">Country </label>
        </div>
        <div className="form-floating col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputPincode"
            {...register("pincode", {
              required: { value: true, message: "Pincode is required" },
            })}
          />
          <label htmlFor="inputPincode">
            Pincode<span className="asterik">&#42;</span>
          </label>
          <p>{errors.pincode?.message}</p>
        </div>{" "}
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkDefault"
            {...register("isDefault")}
          />
          <label className="form-check-label " htmlFor="checkDefault">
            Set As Default
          </label>
        </div>
      </div>
      <div className="col-12">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#addressFormCollapse"
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
