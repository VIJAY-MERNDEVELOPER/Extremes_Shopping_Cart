import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { productState } from "../../app/features/productFeatures/productSlice";
import { getAllProducts } from "../../app/features/productFeatures/productService";
import { TableFooter, TablePagination } from "@mui/material";

function ProductsOveriew() {
  const dispatch = useDispatch();
  const { product, status, message } = useSelector(productState);
  const [noOfPages, setNoOfPages] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllProducts());
    }
    if (status === "success") {
      const totalPages = Math.round(product.length / 10);

      setNoOfPages(totalPages);
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div style={{ height: "100vh" }}>...Loading</div>;
  }
  if (status === "failed") {
    return (
      <div style={{ height: "100vh" }}>
        {" "}
        <span>{message}</span>
      </div>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <Table striped hover>
        <table className="table table-primary">
          <thead className="text-center ">
            <th>
              {" "}
              <input type="checkbox" />{" "}
            </th>
            <th>Id</th>
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
                  <td className="align-content-center ">{product._id}</td>
                  <td className="align-content-center">
                    {product.productName}
                  </td>
                  <td className="align-content-center">
                    {" "}
                    {product.productBrand}
                  </td>
                  <td className=" ">
                    <div className="d-flex  justify-content-center gap-2">
                      {product.productImages.map((image, idx) => {
                        return idx < 2 ? (
                          <img
                            src={`http://localhost:3001/Extremes_6.jpg`}
                            alt=""
                            srcset=""
                            style={{ width: "40px" }}
                          />
                        ) : null;
                      })}{" "}
                    </div>
                  </td>
                  <td className="align-content-center">Men</td>
                  <td className="align-content-center">New Arrivals</td>
                  <td className="align-content-center"> 699</td>
                  <td className="align-content-center">5</td>
                  <td className="align-content-center">60</td>
                  <td className="align-content-center">
                    <input type="checkbox" />{" "}
                  </td>
                  <td className=" text-center align-content-center">
                    <button
                      className="border-0  "
                      style={{ background: "none" }}
                    >
                      <EditIcon sx={{ color: "green" }} />
                    </button>
                    <button
                      className="border-0  "
                      style={{ background: "none" }}
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

export default ProductsOveriew;

// <TablePagination
// component="div"
// count={product.length}
// page={page}
// onPageChange={handleChangePage}
// rowsPerPage={rowsPerPage}
// onRowsPerPageChange={handleChangeRowsPerPage}
// />

{
  /* <div className="d-flex justify-content-center ">
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
          </div> */
}
