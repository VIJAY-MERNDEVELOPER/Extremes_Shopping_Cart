import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../components/styles/sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBarComponet from "./SideBarComponet";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
function SideBar() {
  const sideBarData = [
    {
      category: "New Arrivals",
      image:
        "https://culture-kings-sanity.imgix.net/3b5b3e6fdc4c4a5de77df4ded2097b335344bbb3-876x280.jpg?w=600&amp;auto=compress,format",
    },
    {
      category: "Trending Now",
      image:
        "https://culture-kings-sanity.imgix.net/41f101b189cb781e750bd788caa9378cad6e679d-876x280.jpg?w=600&auto=compress,format",
    },
    {
      category: "Upcoming Releases",
      image:
        "https://culture-kings-sanity.imgix.net/2c6d8a36da9a83e7155fc0cf7e372d695217a865-876x280.jpg?w=600&auto=compress,format",
    },
    {
      category: "Tops",
      image:
        "https://culture-kings-sanity.imgix.net/7d1913f0b3d9b4226b34fb1998c7160262f51ea6-876x280.jpg?w=600&auto=compress,format",
    },
  ];

  const data = [
    {
      name: "Sign In",
      icon: "bi bi-person",
      add: false,
    },
    {
      name: "Register",
      icon: "bi bi-pencil-square",
      add: false,
    },
    {
      name: "Blog",
      icon: "bi bi-info-circle",
      add: false,
    },
    {
      name: "Shipping & Returns",
      icon: "bi bi-bag-check",
      add: false,
    },
    {
      name: "Payment Options",
      icon: "bi bi-credit-card",
      add: true,
    },
  ];

  return (
    <Box
      sx={{ width: 380, overflowX: "hidden" }}
      role="presentation"
      className="sidebar-container"
    >
      <div className=" sidebar col-lg-3 col-sm-12 col-md-6 border-1  ">
        <div className="row  py-3 border-dark-subtle mx-0 border-dark-subtle border-bottom bg-white sticky-top">
          <div className="col-4 text-center border-dark-subtle border-end ">
            MEN
          </div>
          <div className="col-4 text-center border-dark-subtle border-end">
            WOMEN
          </div>
          <div className="col-4 text-center">SALE</div>
        </div>
        <div className="row mt-3 justify-content-center ">
          <div className="col-11">
            <div className=" input-group ">
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="search for brands and products"
              />

              <button
                className="input-group-text "
                style={{ backgroundColor: "rgb(255,0,0" }}
              >
                <SearchIcon style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center  mt-3">
          {" "}
          {sideBarData.map((data, idx) => {
            return (
              <SideBarComponet
                key={idx}
                category={data.category}
                image={data.image}
              />
            );
          })}{" "}
        </div>
        <div className="row justify-content-center  mt-3">
          <ul className="list-group">
            {" "}
            {data.map((data, idx) => {
              return (
                <li key={idx} className="list-group-item  py-3 fs-6 fw-medium">
                  <div className="row align-center">
                    <div className="col-8  col-lg-8 mx-3">
                      <span className="me-1">
                        {" "}
                        <i className={data.icon}></i>
                      </span>{" "}
                      <span>{data.name}</span>
                    </div>

                    {data.add ? (
                      <span type="button" className="col-2 col-lg-2 fw-bolder ">
                        <AddIcon className="fw-bold " />
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>{" "}
    </Box>
  );
}

export default SideBar;
