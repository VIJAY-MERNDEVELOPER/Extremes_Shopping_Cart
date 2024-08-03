/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Grid, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        maxHeight: 450,
        padding: 0,
        // border: 0,
        margin: 0,
      }}
      className="card"
    >
      <Link to={`/product/${product.id}`} className="card-link">
        <CardMedia
          sx={{ height: 250, width: "100%", padding: 0 }}
          image={product.product_image_1}
          title={product.product_name}
          className="card-image"
        >
          {" "}
          <button className="wishlist-icon">
            <BookmarkBorderIcon style={{ width: "40px" }} />
          </button>
          {/* <button className="add-to-cart-btn">Add To Cart</button> */}
        </CardMedia>
        <CardContent>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <img src={product.brand_logo} alt="NIKE" width={"75px"} />
          </Grid>
          <Typography
            variant="span"
            color="text.secondary"
            fontSize={12}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            <Grid>{product.product_name}</Grid>
          </Typography>{" "}
          <Typography fontSize={15} fontWeight={"bold"} textAlign={"center"}>
            <Grid>
              <span> ₹{product.product_price}</span>
            </Grid>
          </Typography>
        </CardContent>
      </Link>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        style={{ paddingBottom: 5 }}
      >
        <button className="add-to-cart-btn"> Add To Cart</button>
      </Grid>
    </Card>
  );
}

export default ProductCard;
