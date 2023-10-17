import React from "react";
import { makeStyles, Box, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import EmailIcon from "@material-ui/icons/Email";
import LanguageComponent from "../component/LanguageComponant";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
// import IconComponentTop from "src/component/IconComponentTop";
import CallIcon from "@material-ui/icons/Call";
import SearchBar from "./SearchBar";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    height: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "30px",
    // gap: 20,
    "& svg": {
      fontSize: "18px",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontFamily: "system-ui",
      fontSize: "16px",
      fontFamily: "system-ui",
      fontWeight: "400",
      "@media (max-width: 576px)": {
        fontSize: "13px",
      },
    },
  },
  ultag: {
    listStyleType: "none",
    marginblockstart: "0em",
    marginblockend: "0em",
    display: "flex",
    gap: "10px",
    padding: "0",
    "@media (max-width: 576px)": {
      display: "block",
    },
  },
  listTag: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginblockstart: "0em",
    marginblockend: "0em",
    cursor: "pointer",
    "@media(max-width:576px)": {
      lineHeight: "0px !important",
      marginBottom: "-17px",
    },
  },
  homeText: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 576px)": {
      fontSize: "10px",
      lineHeight: "24px",
    },
    "&:hover": {
      color: "rgb(255, 205, 30)",
    },
  },

  topbackground: {
    backgroundColor: "rgb(8 9 11)",
    height: "inherit",
    "@media(max-width:576px)": {
      paddingBottom: "17px",
    },
  },
}));
const TopbarTop = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.topbackground} width={"100%"}>
      <Container maxWidth>
        <Box className={classes.mainBox}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              style={{ color: "#f4e757" }}
              display={"flex"}
              alignItems={"center"}
            >
              <p className={classes.homeText}>
                &nbsp; <a href="/">IT Helpdesk :</a>
                <a href="tel:">
                  &nbsp;{" "}
                  <CallIcon style={{ fontSize: "15px", color: "#f4e757" }} />{" "}
                  011-24600-668
                </a>
              </p>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <p className={classes.homeText}>
                <EmailIcon />
                &nbsp;
                <a href="mailto:aicho@aicofindia.com">
                  itservicedesk@aicofindia.com
                </a>
              </p>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Box style={{ paddingRight: "13px" }}>
              <ul className={classes.ultag}>
                {/* <li
                  className={classes.listTag}
                  onClick={() => history.push("/")}
                >
                  <Box style={{ color: "#f4e757" }}>
                    <EmailIcon style={{ paddingTop: "1px" }} />
                  </Box>
                  <p className={classes.homeText}>
                    <a href="mailto:aicho@aicofindia.com">
                      aicho@aicofindia.com
                    </a>
                  </p>
                </li> */}
                {/* <li
                  className={classes.listTag}
                  onClick={() => history.push("/contacts-management")}
                >
                  <Box style={{ color: "#f4e757" }}>
                    <CallIcon style={{ paddingTop: "1px" }} />
                  </Box>
                  <p className={classes.homeText}>
                    {" "}
                    <a href="tel:">011 - 24604444</a>
                  </p>
                </li> */}

                <li
                  className={classes.listTag}
                  onClick={() => history.push("/contacts-management")}
                >
                  <LanguageComponent />
                </li>
              </ul>
            </Box>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            {/* <Box display={"flex"} alignItems={"center"}>
              <SearchBar />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopbarTop;
