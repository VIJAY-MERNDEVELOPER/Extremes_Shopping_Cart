import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/features/productFeatures/productService";

const dispatch = useDispatch();
const { product, state, message } = useSelector(productState);

const columns = [
  { field: "id", headerName: "ID" },
  { field: "productName", headerName: "Product Name" },
  { field: "productBrand", headerName: "Product Brand" },
  { field: "productimages", headerName: "Product Images" },
  { field: "category", headerName: "Category" },
  { field: "subcategory", headerName: "Sub-Category" },
  { field: "price", headerName: "Price" },
  { field: "discount", headerName: "Discount" },
  { field: "stock", headerName: "Stock" },
  { field: "outofstock", headerName: "Out Of Stock" },
];

console.log(product);

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };
useEffect(() => {
  dispatch(getAllProducts());
}, [dispatch]);

export default function TableForm() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
