import React, { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mandatesCardContainer: {
    borderRadius: "10px",
    borderBottom: "11px",
    minWidth: "270px",
    borderLeft: "10px",
    borderRight: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  mandatesCardWrapper: {
    display: "flex",
    alignItems: "center",
    width: "96%",

    "& .mandatesTitles": {
      textShadow: "0.3px 0 0 rgba(14, 34, 7, .8)",
      fontSize: "15px",
      fontFamily: "Poppins",
      lineHeight: "30px",
      letterSpacing: "0",
      fontWeight: "500",
      display: "flex",
      padding: "5px 20px 5px",
      color: "#000",
      width: "100%",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",

      "&:hover": {
        color: "#009035",
      },
    },

    "&:hover": {
      background: "#f8f6f1",
      borderRadius: "6px",
      // paddingRight: "6px",
      "& .mandatesTitles": {
        color: "#000",
        margin: "0 12px",
        textAlign: "left",
        display: "block",
        padding: "16px 0",
        position: "relative",
        fontSize: "19px",
        textAlign: "center",
        transition: "color 0.1s, background-color 0.1s",
        fontFamily: "system-ui",
        fontWeight: "500",
        lineHeight: "16px",
        letterSpacing: "1px",
        textDecoration: "none",
      },
      "& .forwardIconContainer": {
        display: "block",
        color: "#009035",
        padding: "0 20px",
      },
      "& svg": {
        color: "#009035",
      },
    },
    "& .forwardIconContainer": {
      display: "none",
    },
  },
}));

const SubMenuChild = ({ CompanyTitle, openmenu, setMenu, MenuValue }) => {
  console.log("dasfklndfkjbkdg===>", MenuValue);
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      className={!openmenu ? "submenus" : "null"}
      style={{ background: "#639851" }}
    >
      <Box className={classes.mandatesCardContainer}>
        {MenuValue.map((item, index) => {
          return (
            <Box
              className={classes.mandatesCardWrapper}
              onClick={() =>
                history.push({
                  pathname: item?.link,
                  state: item?.brochures,
                })
              }
            >
              <Box key={index} className="mandatesTitles">
                lds;djfdl;jlfjhlhnf
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SubMenuChild;
