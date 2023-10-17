import React, { useContext } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    position: "relative",
    // height: "100vh",
    "@media(max-width:1280px)": {
      height: "auto !important",
    },
  },
  MainLayout: {
    minHeight: "calc(100vh - 415px)",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Box>
        <TopBar />
      </Box>

      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>

      <div className={classes.MainLayout}>{children}</div>
      <Box position={"absolute"} bottom={0} width={"100%"}>
        <Footer />
      </Box>
    </div>
  );
};

export default MainLayout;
