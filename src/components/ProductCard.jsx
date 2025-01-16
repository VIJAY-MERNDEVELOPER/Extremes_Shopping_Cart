/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Grid, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./styles/ProductCard.css";
import { useAddToCartMutation } from "../app/features/cartFeatures/cartApiSlice";

function ProductCard({ product }) {
  const [addToCart, { isLoading, isError, isSuccess, data, error }] =
    useAddToCartMutation();

  const handleAddProduct = (productId, size, quantity) => {
    addToCart({ productId, size, quantity });
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        maxHeight: 500,
        padding: 0,
        // border: 0,
        margin: 0,
      }}
      className="card"
    >
      <Link to={`/product/${product._id}`} className="card-link">
        <CardMedia
          sx={{ height: 300, width: "100%", padding: 0, objectFit: "cover" }}
          image={`http://localhost:3001/${product?.productImages[0].filename}`}
          title={`extremes_${product._id}`}
          className="card-image"
        >
          {" "}
          <button className="wishlist-icon">
            <BookmarkBorderIcon style={{ width: "40px" }} />
          </button>
          {/* <button className="add-to-cart-btn">Add To Cart</button> */}
        </CardMedia>
        <CardContent>
          <Typography
            variant="span"
            color="text.secondary"
            fontSize={12}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            <Grid>{product.productBrand}</Grid>
          </Typography>
          <Typography
            variant="span"
            color="text.secondary"
            fontSize={12}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            <Grid>{product.productName}</Grid>
          </Typography>{" "}
          <Typography fontSize={15} fontWeight={"bold"} textAlign={"center"}>
            <Grid>
              <span> ₹{product.productPrice}</span>
            </Grid>
          </Typography>
        </CardContent>
      </Link>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        style={{ paddingBottom: 5 }}
      >
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddProduct(product._id, "S", 1)}
        >
          {" "}
          Add To Cart
        </button>
      </Grid>
    </Card>
  );
}

export default ProductCard;
