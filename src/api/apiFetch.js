import axios from "axios";


export const fetchCart = async (setCart) => {
  try {
    const res = await axios.get("/cart", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      setCart(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductData = async (setProducts) => {
  try {
    const res = await axios.get("/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setProducts(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchLatestRelease = async (setLatest) => {
  try {
    const res = await axios.get("/latest_releases", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setLatest(res.data);
      //   console.log(latest);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchVideos = async (setInstaVideos) => {
  try {
    const res = await axios.get("/insta_videos", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setInstaVideos(res.data);
      //   console.log(instaVideos);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategory = async (setCategories) => {
  try {
    const res = await axios.get("/categories", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setCategories(res.data);
      // console.log(categories);
    }
  } catch (error) {
    console.log(error);
  }
};
