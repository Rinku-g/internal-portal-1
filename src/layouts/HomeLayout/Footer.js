import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
    color: "#FFF",
    background: "rgb(35, 38, 47)",
    width: "100%",
    "& h6": {
      color: "#FFFF",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.footerSection}
        // style={{ backgroundImage: "url('../images/footerIMG.png')" }}
      >
        <Typography variant="h6">
          © Agriculture Insurance Company of India Limited, All Right Reserved.
        </Typography>
      </Box>
    </>
  );
}
