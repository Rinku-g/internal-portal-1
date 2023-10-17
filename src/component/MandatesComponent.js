import React from "react";
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
    gap: "0.1rem",
    "&:hover::before": {
      content: "''",
      position: "absolute",
      left: 0,
      width: "100%",
      height: 5,
      bottom: 0,
      right: 0,
      transition: ".3s ease-in-out",
      backgroundColor: "#f4e757", // Example background color
    },
  },
  mandatesCardWrapper: {
    display: "flex",
    alignItems: "center",
    width: "97%",
    "& .mandatesTitles": {
      fontSize: "16px",
      fontFamily: "system-ui",
      lineHeight: "30px",
      letterSpacing: "0",
      fontWeight: "500",
      display: "flex",
      padding: "5px 20px 5px",
      color: "#000",
      width: "100%",
      position: "relative",
      "&:hover": {
        color: "#009035",
      },
    },

    "&:hover": {
      background: "rgb(220,231,216)",
      borderRadius: "6px",
      paddingRight: "6px",
      "& .forwardIconContainer": {
        display: "block",
        color: "#009035",
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

const MandatesComponent = ({ data, openmenu, setMenu }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.mandatesCardContainer}>
      {data.map((item, index) => {
        return (
          <Box
            className={classes.mandatesCardWrapper}
            onClick={() => {
              history.push(item?.link);
            }}
          >
            <Box key={index} className="mandatesTitles">
              {item.title}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MandatesComponent;
