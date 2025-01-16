import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";
import { TableFooter } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import {
//   deleteProduct,
//   getAllProducts,
//   updateProduct,
// } from "../../app/features/productFeatures/productService";
import SelectComponent from "../SelectComponent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  useDeleteProductMutation,
  useGetProductsPaginationQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../app/features/productFeatures/productApiSlice";
import { useLocation, useNavigate } from "react-router-dom";
import "./productoveriew.css";

function ProductsOveriewTable() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit") || 5;
  const sortName = searchParams.get("name");
  const sort = searchParams.get("sort");

  const {
    data: newData,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetProductsPaginationQuery({ page, limit, sortName, sort });
  const { products: product = [], totalProducts = 1 } = newData || {};

  const noOfPages = Math.ceil(totalProducts / Number(limit));

  const [currentPage, setCurrentPage] = useState(page);

  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();

  const [updateData, setUpdateData] = useState({});

  const handleChange = (e, productId) => {
    let { name, value, type, checked } = e.target;
    if (productId === editId) {
      type === "checkbox" && (value = checked ? true : false);

      setUpdateData((prev) => ({
        ...prev,
        [productId]: {
          ...prev[productId],
          [name.includes(".") ? name.split(".")[0] : name]: name.includes(".")
            ? {
                ...prev[productId]?.[name.split(".")[0]],
                [name.split(".")[1]]: value,
              }
            : value,
        },
      }));
    }
  };

  const handleEdit = (product) => {
    if (!(isEdit && product._id === editId)) {
      setIsEdit(true);
      setEditId(product._id);
      setUpdateData({
        [product._id]: {
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
        },
      });
    } else if (product._id === editId && isEdit) {
      updateData[product._id].stocks.total =
        Number(updateData[product._id].stocks.S) +
        Number(updateData[product._id].stocks.M) +
        Number(updateData[product._id].stocks.L) +
        Number(updateData[product._id].stocks.XL);
      // dispatch(
      //   updateProduct({
      //     productId: product._id,
      //     updateData: updateData[product._id],
      //   })
      // );
      updateProduct({
        productId: product._id,
        updateData: updateData[product._id],
      });
      setIsEdit(false);
    }
  };
  const navigate = useNavigate();
  const nextPage = (e) => {
    const page = Number(currentPage) + 1; // console.log(pageArrow);
    if (page <= noOfPages) {
      setCurrentPage(page);
      navigate(`?page=${page}`);
    }
  };
  const prevPage = (e) => {
    const page = Number(currentPage) - 1; // console.log(pageArrow);
    if (page >= 1) {
      setCurrentPage(page);
      navigate(`?page=${page}`);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setCurrentPage(page);
    }
  }, [isSuccess, product]);

  if (isFetching) {
    return <div style={{ height: "100vh" }}>...Loading</div>;
  }
  if (isError) {
    if (error.status === "FETCH_ERROR") {
      return (
        <div style={{ height: "100vh" }}>
          {" "}
          <span>Unable to connect to the server. Please try again later.</span>
        </div>
      );
    }
  }

  return (
    <>
      <Table bordered striped hover responsive>
        <thead className="text-center table">
          <tr>
            <th>
              <input type="checkbox" />
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
          </tr>
        </thead>
        {product?.map((product) => {
          return (
            <tbody key={product._id}>
              <tr className="text-center">
                <td className="align-content-center">
                  <input type="checkbox" />{" "}
                </td>
                {/* <td className="align-content-center ">{product?._id}</td> */}
                <td className="align-content-center">{product?.productName}</td>
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
                            key={idx}
                            src={`http://localhost:3001/${image.filename}`}
                            alt={`extremes_${idx}`}
                            style={{ width: "40px" }}
                          />
                        )
                      );
                    })}{" "}
                  </div>
                </td>
                <td className="align-content-center">{product?.category}</td>
                <td className="align-content-center">{product?.subCategory}</td>
                <td className="align-content-center">
                  {!(isEdit && product?._id === editId) ? (
                    product?.productPrice
                  ) : (
                    <input
                      type="text"
                      name="productPrice"
                      value={updateData[product._id].productPrice}
                      style={{
                        width: "30px",
                        background: "none",
                        border: "none",
                      }}
                      onChange={(e) => handleChange(e, product._id)}
                    />
                  )}
                </td>
                <td className="align-content-center">
                  {!(isEdit && product?._id === editId) ? (
                    product?.discountPercentage
                  ) : (
                    <input
                      type="text"
                      name="discountPercentage"
                      value={updateData[product._id]?.discountPercentage}
                      onChange={(e) => handleChange(e, product._id)}
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
                        <Table striped bordered>
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
                                name="stocks.S"
                                value={updateData[product._id].stocks?.S}
                                min={0}
                                style={{
                                  width: "40px",
                                  background: "none",
                                  border: "none",
                                }}
                                onChange={(e) => handleChange(e, product._id)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="stocks.M"
                                min={0}
                                value={updateData[product._id]?.stocks?.M}
                                style={{
                                  width: "40px",
                                  background: "none",
                                  border: "none",
                                }}
                                onChange={(e) => handleChange(e, product._id)}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="stocks.L"
                                min={0}
                                value={updateData[product._id]?.stocks?.L}
                                style={{
                                  width: "40px",
                                  background: "none",
                                  border: "none",
                                }}
                                onChange={(e) => handleChange(e, product._id)}
                              />
                            </td>
                            <td>
                              {" "}
                              <input
                                type="number"
                                name="stocks.XL"
                                min={0}
                                value={updateData[product._id].stocks.XL}
                                style={{
                                  width: "40px",
                                  background: "none",
                                  border: "none",
                                }}
                                onChange={(e) => handleChange(e, product._id)}
                              />
                            </td>
                          </tbody>
                        </Table>
                      </div>
                    </>
                  ) : (
                    product?.stocks?.total
                  )}
                </td>
                <td className="align-content-center">
                  <input
                    type="checkbox"
                    checked={
                      product?.isOutOfStock ||
                      updateData[product?._id]?.isOutOfStock
                    }
                    name="isOutOfStock"
                    onChange={(e) =>
                      product._id === editId && handleChange(e, product._id)
                    }
                    disabled={!(isEdit && editId === product?._id)}
                  />
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
                      deleteProduct(product?._id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>{" "}
      <div className="d-flex justify-content-center ">
        <ul className="pagination">
          {" "}
          <li className="page-item " onClick={prevPage}>
            <button
              className="page-link"
              aria-label="Previous"
              disabled={currentPage < 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {[...new Array(noOfPages)].map((arr, idx) => {
            const pageNum = idx + 1;
            return (
              <li
                className={`page-item ${
                  currentPage === pageNum ? "active" : ""
                }`}
                aria-current={currentPage === pageNum ? "page" : undefined}
                key={idx}
                onClick={() => {
                  setCurrentPage(pageNum);
                  navigate(`?page=${currentPage}`);
                }}
              >
                <button className="page-link" aria-label={`${idx + 1}`}>
                  {idx + 1}
                </button>
              </li>
            );
          })}
          <li
            onClick={nextPage}
            className="page-item"
            disabled={currentPage <= noOfPages}
          >
            <button className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductsOveriewTable;
