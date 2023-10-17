import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Box } from "@material-ui/core";
import TopBar from "../TopBar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "background: "radial-gradient(95.29% 54.98% at 63.22% 132.9%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(63.04% 67.19% at 77.35% 61.77%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(59.39% 30.8% at 75.9% 19.72%, rgba(186, 0, 187, 0.42) 0%, #AC02B2 0.01%, #0F1755 100%)"",
    // background:
    //   "radial-gradient(95.29% 54.98% at 63.22% 132.9%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(63.04% 67.19% at 77.35% 61.77%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(59.39% 30.8% at 75.9% 19.72%, rgba(186, 0, 187, 0.42) 0%, #AC02B2 0.01%, #0F1755 100%)",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 80,
    minHeight: "calc(100vh - 80px)",
    // backgroundColor: theme.palette.background.darkgrey,
    // backgroundColor: "#1A2C38",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 200,
      // paddingRight: " 30px",
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    marginTop: "137px",
    background: theme.palette.primary.paper,
    padding: "0 0px 0 200px",
    "@media(max-width:1280px)": {
      marginTop: "137px",
      display: "inline-black",
    },
    "@media(max-width:1220px)": {
      marginTop: "5.2rem",
    },
    "@media(max-width:960px)": {
      marginTop: "6.5rem",
    },
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    width: "100%",
    position: "relative",
    WebkitOverflowScrolling: "touch",
    background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "10px",
  },
}));
const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <TopBar type={true} />

        <div className={classes.contentContainer} style={{}}>
          <div className={classes.content}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
