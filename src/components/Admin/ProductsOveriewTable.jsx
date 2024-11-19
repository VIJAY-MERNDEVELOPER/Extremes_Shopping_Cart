import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productReset,
  productState,
} from "../../app/features/productFeatures/productSlice";
import { Table } from "react-bootstrap";
import { TableFooter } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../app/features/productFeatures/productService";
import SelectComponent from "../SelectComponent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ProductsOveriewTable({ noOfPages }) {
  const { product, status, message } = useSelector(productState);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState({
    productPrice: "",
    discountPercentage: "",
    stocks: {
      total: "",
      S: "",
      M: "",
      L: "",
      XL: "",
    },
    isOutOfStock: "",
  });

  const formData = new FormData();

  const handleChange = (e) => {
    let { name, value, type, defaultChecked } = e.target;

    setUpdateData((prev) => ({ ...prev, [name]: value }));
    console.log(updateData);
  };

  const handleEdit = (product, productData) => {
    if (!(isEdit && product._id === editId)) {
      setIsEdit(true);
      setEditId(product._id);
      setUpdateData({
        productPrice: product?.productPrice,
        discountPercentage: product?.discountPercentage,
        stocks: {
          total: product?.stocks?.total,
          S: product?.stocks?.S,
          M: product?.stocks?.M,
          L: product?.stocks?.L,
          XL: product?.stocks?.XL,
        },
        isOutOfStock: product?.isOutOfStock,
      });
    } else if (product._id === editId && isEdit) {
      dispatch(updateProduct({ productId: product._id, updateData }));
      setIsEdit(false);
    }
  };

  return (
    <div>
      {" "}
      <Table striped hover>
        <table className="table table-primary">
          <thead className="text-center ">
            <th>
              {" "}
              <input type="checkbox" />{" "}
            </th>
            {/* <th>Id</th> */}
            <th>ProductName</th>
            <th>ProductBrand</th>
            <th>Images</th>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Stock</th>
            <th>Out Of Stock</th>
            <th></th>
          </thead>
          <tbody>
            {product?.map((product, idx) => {
              return (
                <tr className="text-center" key={idx}>
                  <td className="align-content-center">
                    <input type="checkbox" />{" "}
                  </td>
                  {/* <td className="align-content-center ">{product?._id}</td> */}
                  <td className="align-content-center">
                    {product?.productName}
                  </td>
                  <td className="align-content-center">
                    {" "}
                    {product?.productBrand}
                  </td>
                  <td className=" ">
                    <div className="d-flex  justify-content-center gap-2">
                      {product?.productImages?.map((image, idx) => {
                        return (
                          idx < 2 && (
                            <img
                              src={`http://localhost:3001/${image.filename}`}
                              alt=""
                              srcset=""
                              style={{ width: "40px" }}
                            />
                          )
                        );
                      })}{" "}
                    </div>
                  </td>
                  <td className="align-content-center">{product?.category}</td>
                  <td className="align-content-center">
                    {product?.subCategory}
                  </td>
                  <td className="align-content-center">
                    {!(isEdit && product?._id === editId) ? (
                      product?.productPrice
                    ) : (
                      <input
                        type="text"
                        name="productPrice"
                        value={updateData.productPrice}
                        style={{
                          width: "30px",
                          background: "none",
                          border: "none",
                        }}
                        onChange={(e) => handleChange(e)}
                      />
                    )}{" "}
                  </td>
                  <td className="align-content-center">
                    {" "}
                    {!(isEdit && product?._id === editId) ? (
                      product?.discountPercentage
                    ) : (
                      <input
                        type="text"
                        name="discountPercentage"
                        value={updateData?.discountPercentage}
                        onChange={(e) =>
                          setUpdateData((prev) => ({
                            ...prev,
                            discountPercentage: e.target.value,
                          }))
                        }
                        style={{
                          width: "30px",
                          background: "none",
                          border: "none",
                        }}
                      />
                    )}
                  </td>
                  <td className="align-content-center justify-content-center">
                    {isEdit && product?._id === editId ? (
                      <>
                        <div className="row">
                          <table>
                            <thead>
                              <th>S</th>
                              <th>M</th>
                              <th>L</th>
                              <th>XL</th>
                            </thead>
                            <tbody>
                              <td>
                                <input
                                  type="number"
                                  name="ssize"
                                  value={updateData?.stocks?.S}
                                  style={{
                                    width: "30px",
                                    background: "none",
                                    border: "none",
                                  }}
                                  onChange={(e) =>
                                    setUpdateData((prev) => ({
                                      ...prev,
                                      stocks: {
                                        ...prev.stocks,
                                        S: Number(e.target.value),
                                        total: Number(
                                          Number(e.target.value) +
                                            prev.stocks.M +
                                            prev.stocks.L +
                                            prev.stocks.XL
                                        ),
                                      },
                                    }))
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name="msize"
                                  value={updateData?.stocks?.M}
                                  style={{
                                    width: "30px",
                                    background: "none",
                                    border: "none",
                                  }}
                                  onChange={(e) =>
                                    setUpdateData((prev) => ({
                                      ...prev,
                                      stocks: {
                                        ...prev.stocks,
                                        M: Number(e.target.value),
                                        total: Number(
                                          Number(e.target.value) +
                                            prev.stocks.S +
                                            prev.stocks.L +
                                            prev.stocks.XL
                                        ),
                                      },
                                    }))
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  name="lsize"
                                  value={updateData?.stocks?.L}
                                  style={{
                                    width: "30px",
                                    background: "none",
                                    border: "none",
                                  }}
                                  onChange={(e) =>
                                    setUpdateData((prev) => ({
                                      ...prev,
                                      stocks: {
                                        ...prev.stocks,
                                        L: Number(e.target.value),
                                        total: Number(
                                          Number(e.target.value) +
                                            prev.stocks.S +
                                            prev.stocks.L +
                                            prev.stocks.XL
                                        ),
                                      },
                                    }))
                                  }
                                />
                              </td>
                              <td>
                                {" "}
                                <input
                                  type="number"
                                  value={updateData.stocks.XL}
                                  style={{
                                    width: "30px",
                                    background: "none",
                                    border: "none",
                                  }}
                                  onChange={(e) =>
                                    setUpdateData((prev) => ({
                                      ...prev,
                                      stocks: {
                                        ...prev.stocks,
                                        XL: Number(e.target.value),
                                        total: Number(
                                          Number(e.target.value) +
                                            prev.stocks.M +
                                            prev.stocks.L +
                                            prev.stocks.S
                                        ),
                                      },
                                    }))
                                  }
                                />
                              </td>
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : (
                      product?.stocks?.total || 30
                    )}
                  </td>
                  <td className="align-content-center">
                    <input
                      type="checkbox"
                      defaultChecked={product?.isOutOfStock}
                      onChange={(prev) => ({
                        ...prev,
                        isOutOfStock: e.target.checked,
                      })}
                      disabled={!(isEdit && editId === product?._id)}
                    />{" "}
                  </td>
                  <td className=" text-center align-content-center">
                    <button
                      className="border-0  "
                      style={{ background: "none" }}
                      onClick={() => {
                        handleEdit(product);
                      }}
                    >
                      {!(isEdit && product?._id === editId) ? (
                        <EditIcon sx={{ color: "green" }} />
                      ) : (
                        <CheckCircleIcon sx={{ color: "green" }} />
                      )}
                    </button>
                    <button
                      className="border-0  "
                      style={{ background: "none" }}
                      onClick={() => {
                        dispatch(deleteProduct(product?._id));
                      }}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>{" "}
        </table>{" "}
        <TableFooter>
          {" "}
          <div className="d-flex justify-content-center ">
            <ul class="pagination">
              {" "}
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {[...new Array(noOfPages)].map((arr, idx) => {
                return (
                  <li class="page-item" key={idx}>
                    <a class="page-link" href="#">
                      {idx + 1}
                    </a>
                  </li>
                );
              })}
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>{" "}
        </TableFooter>
      </Table>
    </div>
  );
}

export default ProductsOveriewTable;
