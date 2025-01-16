import React from "react";
import { useSelector } from "react-redux";
import { userState } from "../app/features/userSFeatures/userSlice";

function CheckOutLoginStage() {
  const { user, status } = useSelector(userState);
  console.log(user);
  return (
    <div className="d-flex flex-column bg-white p-3 mb-2">
      <div className="col-6 ">
        <span className="badge text-bg-secondary me-3 ">1</span>
        <span className="text-secondary fs-6 fw-bold">LOGIN</span>
      </div>
      <div className="col-6 ps-4 ms-3 ">
        <span className="fw-semibold">{user.username}</span>
      </div>
    </div>
  );
}

export default CheckOutLoginStage;
