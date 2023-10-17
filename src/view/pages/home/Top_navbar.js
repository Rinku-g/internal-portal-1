import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Small_Banner from "./Small_Banner";
import MenuComponent from "../../../component/MenuComponants";

const useStyles = makeStyles((theme) => ({
  mainIndexsection: {
    // height: "427px",
    "& .menulist": {
      "& h6": {
        fontSize: "16px",
        fontWeight: 500,
        color: "#FFF",
        textTransform: "captalize",
      },
    },
    "& .menusection": {
      background: "#0192be",
      padding: "2px 18px",
      "& .MenuTab": {
        position: "relative",
        "& .menuComponent": {
          display: "none",
        },
        "&:hover": {
          "& .menuComponent": {
            display: "block",
            position: "absolute",
            zIndex: 1,
            background: "#fff",
            // textAlign: "left !important",
            width: "250px !important",
          },
        },
      },
    },
  },
  mandatesCardWrapper: {
    paddingBottom: "5px",
    "& .mandatesTitles": {
      color: "green",
      fontWeight: 600,
      padding: "10px 0px 5px 10px",
      fontFamily: "system-ui",
      color: "#000",
      // color: "rgb(3, 125, 162)",

      "&:hover": {
        background: "#0192be21",
        // color: "#06485b",
        cursor: "pointer",
      },
    },
  },
}));

const Top_navbar = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Portals");

  const portals = [
    {
      title: "External Portal (website)",
      link: "/",
    },
    {
      title: "KMS Portal",
      link: "/",
    },
    {
      title: "Farmer Portal",
      link: "/",
    },
    {
      title: "Field Investigation",
      link: "/",
    },
    {
      title: "Channel Partner",
      link: "/",
    },
  ];

  const publications = [
    {
      title: "Crop Health Bulletin",
      link: "/",
    },
  ];
  const sitemap = [
    {
      title: "External Portal (website)",
      link: "/",
    },
    {
      title: "KMS Portal",
      link: "/",
    },
    {
      title: "Farmer Portal",
      link: "/",
    },
    {
      title: "Field Investigation",
      link: "/",
    },
    {
      title: "Channel Partner",
      link: "/",
    },
  ];

  return (
    <Box>
      <Box className={classes.mainIndexsection}>
        <Box className="menusection">
          <Container style={{ display: "flex", alignItems: "center" }}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <HomeIcon style={{ color: "#FFFF" }} />
              &nbsp; &nbsp;&nbsp;
              <Box className="MenuTab">
                <NavLink to="/">
                  {" "}
                  <Button
                    className="menulist"
                    style={
                      active === "Portals" ? { background: "#037da2" } : {}
                    }
                    onClick={() => setActive("Portals")}
                  >
                    {" "}
                    <Typography variant="h6">Our Portals</Typography>
                  </Button>
                </NavLink>
                <Box className="menuComponent">
                  {portals &&
                    portals?.map((data, index) => {
                      return (
                        <Box
                          className={classes.mandatesCardWrapper}
                          // onClick={() =>
                          //   history.push({
                          //     pathname: item?.link,
                          //     state: item?.brochures,
                          //   })
                          // }
                        >
                          <Box className="mandatesTitles">{data?.title}</Box>
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              &nbsp; &nbsp;&nbsp;
              <Box className="MenuTab">
                <NavLink to="/">
                  {" "}
                  <Button
                    className="menulist"
                    style={active === "Office" ? { background: "#037da2" } : {}}
                    onClick={() => setActive("Office")}
                  >
                    {" "}
                    <Typography variant="h6">publications</Typography>
                  </Button>
                </NavLink>
                <Box className="menuComponent">
                  {/* <MenuComponent MenuDataValue={MenuDataValue} /> */}
                  {publications &&
                    publications?.map((data, index) => {
                      return (
                        <Box className={classes.mandatesCardWrapper}>
                          <Box className="mandatesTitles">{data?.title}</Box>
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>

            <Box style={{ display: "flex", alignItems: "center" }}>
              &nbsp; &nbsp;&nbsp;
              <Box className="MenuTab">
                <NavLink to="/">
                  {" "}
                  <Button
                    className="menulist"
                    style={active == "Sitemap" ? { background: "#037da2" } : {}}
                    onClick={() => setActive("Sitemap")}
                  >
                    {" "}
                    <Typography variant="h6">Sitemap</Typography>
                  </Button>
                </NavLink>
                <Box className="menuComponent"></Box>
              </Box>
            </Box>

            <Box style={{ display: "flex", alignItems: "center" }}>
              &nbsp; &nbsp;&nbsp;
              <Box className="MenuTab">
                <NavLink to="/">
                  {" "}
                  <Button
                    className="menulist"
                    style={active == "Help" ? { background: "#037da2" } : {}}
                    onClick={() => setActive("Help")}
                  >
                    {" "}
                    <Typography variant="h6">Help</Typography>
                  </Button>
                </NavLink>
                <Box className="menuComponent"></Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Small_Banner />
    </Box>
  );
};

export default Top_navbar;
