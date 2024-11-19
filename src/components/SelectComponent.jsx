import React from "react";

function SelectComponent() {
  return (
    <select
      className="form-select"
      id="category"
      aria-label="Default select example"
    >
      <option value="men">Men</option>

      <option value="women">Women</option>
    </select>
  );
}

export default SelectComponent;
