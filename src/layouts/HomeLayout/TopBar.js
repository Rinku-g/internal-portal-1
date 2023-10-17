import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Grid,
  Box,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FaPinterestP } from "react-icons/fa";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../component/Logo";
import TopbarTop from "../../component/TopbarTop";
import MenuProfileComponent from "../../component/MenuProfileComponent";
import ResponsiveMenu from "../../component/ResponsiveMenu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    padding: "5px 25px",
    justifyContent: "space-between",
    height: "67px !important",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "76px !important",
    },
  },

  drawericon: {
    color: "#000",
    position: "absolute",
    top: "0px",
    right: "-10px",
    fontSize: "25px",
    "@media (max-width: 998px)": {
      top: "9px",
    },
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },

  containerHeight: {
    height: "100%",
    transform: "translateY(0px)",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "6px 0px",
    "@media(max-width:998px)": {
      padding: "6px 0px",
      margin: "0px 58px",
    },
    "@media(max-width:576px)": {
      padding: "6px 0px",
      margin: "0px 20px",
    },
  },

  dropdown: {
    "& .dropdown-content": {
      display: "none",
    },
    "&:hover": {
      "& .dropdown-content": {
        display: "block",
      },
    },
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    "& ul": {
      display: "flex",
      listStyle: "none",
      width: "100%",
    },
    "& li": {
      display: "inline-block",
      padding: "20px 0 20px",
      verticalAlign: "middle",
      "& .dropdown-content": {
        display: "none",
      },
      "&:hover": {
        "& .dropdown-content": {
          display: "block",
        },
      },
    },

    "& a:hover, & a:focus, & a:active": {
      color: "rgb(31, 99, 6)",
      textDecoration: "none",
    },
    "& a": {
      fontFamily: "system-ui",
      textDecoration: "none",
      transition: "color 0.1s, background-color 0.1s",
      position: "relative",
      display: "block",
      padding: "16px 0",
      margin: "0 12px",
      letterSpacing: "1px",
      fontSize: "17px",
      lineHeight: "16px",
      fontWeight: 500,
      // textTransform: "uppercase",
      color: "#000",
      textAlign: "center",
    },
    "& a::before": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 3,
      left: 0,
      height: 3,
      width: "100%",
      backgroundColor: "#f4e757",
      transformOrigin: "right top",
      transform: "scale(0, 1)",
      transition: "color 0.1s, transform 0.2s ease-out",
    },
    "& a:active::before": {
      backgroundColor: "#000",
    },
    "& a:hover::before, & a:focus::before": {
      transformOrigin: "left top",
      transform: "scale(1, 1)",
    },
  },
  appBarrClass: {
    "@media(max-width:1220px)": {
      // paddingBottom: "15px 0px",
    },
  },
  GridClass: {
    padding: "0 0 0 120px",
    "@media(max-width:1280px)": {
      padding: "0 0 0 30px",
    },
  },
  harderClass: {
    left: 0,
    width: "100%",
    padding: 0,
    zIndex: "999",
    position: "fixed",
    background: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
    marginTop: "0px",
    top: "0",
    transform: "translateY(0px)",

    transition: "0.6s",
  },

  SocialBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    "& a": {
      color: "#FFFFFF",
      textDecoration: "none",
    },
  },
  unorderlist: {
    display: "flex",
    gap: "23px",
    alignItems: "center",
    margin: "45px 0px",
  },
  listItem: {
    background: "rgb(31, 99, 6)",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    listStyle: "none",
    transition: "0.3s ease-in-out",
    "&:hover": {
      color: "#FFFFFF",
      background: "transparent",
      cursor: "pointer",
    },
    "& .icon": {
      color: "#FFFFFF",
    },
  },
  topsectionnavbar: {
    padding: "27px 0px 0px 35px",
  },
  comapnyBox: {
    paddingLeft: "15px",
    width: "980px",
    "@media(max-width:1280px)": {
      width: "1200px",
    },
  },
  comapnyName: {
    "& h5": {
      color: "#ffe3aa",
      fontSize: "16px",
      fontWeight: 400,
    },
    "& p": {
      color: "#ffe3aa",
      fontSize: "14px",
      fontWeight: 400,
      // paddingBottom: "5px",
    },
  },
}));

export default function Header({ type }) {
  const classes = useStyles();
  const { toolbar, drawericon, containerHeight, mainHeader } = useStyles();
  const [openmenu, setMenu] = useState("Home");

  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const MenuValue = [
    // {
    //   menuValue: "Home",
    //   // link: "",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "About US",
    //   // link: "/business-dashboard",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "Office Contact",
    //   // link: "",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "My Communication",
    //   // link: "",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "Notice",
    //   // link: "",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "E_Magazine",
    //   // link: "",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "Career",
    //   // link: "/career",
    //   MenuDataValue: [],
    // },
    // {
    //   menuValue: "Contact_Us",
    //   // link: "/contacts-management",
    //   MenuDataValue: [],
    // },
  ];
  const displayDesktop = () => {
    return (
      <Box style={{ background: "#23262f" }}>
        <Container maxWidth>
          <Toolbar className={toolbar}>
            {femmecubatorLogo}
            <Grid
              className={classes.GridClass}
              container
              item
              direction="row"
              alignItems="center"
            >
              {getMenuButtons()}
            </Grid>
            <Box maxWidth={60}>
              <Avatar
                src="/logo/placeholder.webp"
                alt="image"
                style={{ width: "50px", height: "50px" }}
              />
            </Box>
            <Box display={"flex"}>
              <MenuProfileComponent />
            </Box>
          </Toolbar>
        </Container>
      </Box>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        {/* <Slide right> */}
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Box p={"20px 0 20px 0"}>
            <Box padding={"0px 0px 0px 35px"} style={{ maxWidth: "125px" }}>
              <img
                src="../images/logo/Logo New with Name-ENG.png"
                alt="Logo"
                width={"100%"}
              />
            </Box>
          </Box>
          <Grid>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#0e2207",
                color: "white",
                width: "300px",
              }}
            >
              {getMenuButtons("TOPVALUE")}
              <Box className={classes.topsectionnavbar}>
                <Box mt={2} className={classes.SocialBox}>
                  <EmailIcon />
                  <a href="tel:aicho@aicofindia.com"> aicho@aicofindia.com</a>
                </Box>
                <Box mt={2} className={classes.SocialBox}>
                  <PhoneIcon />
                  <a href="tel:5493183">1800-11-6515</a>
                </Box>
              </Box>

              <ul className={classes.unorderlist}>
                <li className={classes.listItem}>
                  <a
                    href="#"
                    className={`${classes.link} ${classes.twitter}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src="images/twitter1.jpg"
                      alt="img"
                      className="icon"
                      style={{
                        width: "63%",
                        height: "63%",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        position: "absolute",
                      }}
                    />
                  </a>
                </li>
                <li className={classes.listItem}>
                  <a href="#" className={`${classes.link} $ facebook}`}>
                    <FacebookIcon className="icon" />
                  </a>
                </li>
                <li className={classes.listItem}>
                  <a href="#" className={`${classes.link} ${classes.linkedin}`}>
                    <FaPinterestP className="icon" />
                  </a>
                </li>
                <li className={classes.listItem}>
                  <a
                    href="#"
                    className={`${classes.link} ${classes.googlePlus}`}
                  >
                    <InstagramIcon className="icon" />
                  </a>
                </li>
              </ul>
            </Box>
          </Grid>
          {/* </div> */}
        </Drawer>
        {/* </Slide> */}

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "rgb(31 99 6)", fontSize: "30px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <>
      <Box style={{ maxWidth: "130px" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            textAlign: "left",
          }}
        >
          <Logo className="logoImg" />
        </Link>
      </Box>
      <Box className={classes.comapnyBox}>
        <Box className={classes.comapnyName}>
          <Typography variant="body1">भारतीय कृषि बीमा कंपनी</Typography>
          <Typography variant="h5">
            Agriculture Insurance Company of India Limited
          </Typography>
        </Box>
      </Box>
    </>
  );

  const getMenuButtons = (value) => {
    return (
      <>
        {MenuValue?.map((data, index) => {
          return (
            <>
              <ResponsiveMenu
                CompanyTitle={data}
                data={data}
                index={index}
                value={value}
                openmenu={openmenu}
                setMenu={setMenu}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      {type ? (
        <AppBar
          elevation={0}
          style={{
            backgroundColor: "#fff",
            border: "none",
            // boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
            transition: "0.3s ease-in-out", // Add the transition property
          }}
          className={classes.appBarrClass}
        >
          <TopbarTop />
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      ) : (
        <AppBar
          // position={auth.showHeader ? "fixed" : "static"} // Change "initally" to "static"
          elevation={0}
          style={{
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
            transition: "0.3s ease-in-out", // Add the transition property
          }}
          className={classes.appBarrClass}
        >
          <TopbarTop />
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      )}
    </>
  );
}
