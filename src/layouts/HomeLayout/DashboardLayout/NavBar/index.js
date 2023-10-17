/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { RiDashboard2Fill } from "react-icons/ri";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import NavItem from "./NavItem";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CreditCardIcon from "@material-ui/icons/CreditCard";
// const sections = [
//   {
//     items: [
//       {
//         title: "Dashboard",
//         href: "/dashboard",
//       },
//       {
//         title: "Packages",
//         href: "/package",
//       },
//       {
//         title: "My Network",
//         href: "my-network",
//       },
//     ],
//   },
// ];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean()}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 200,
    top: 136,

    height: "calc(100% - 80px)",
    background: "#0F212E",
    // position: "initial",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  logo: {
    width: "40px",
    paddingLeft: "20px",
    paddingTop: "21px",
    cursor: "pointer",
  },
  BITBox: {
    background: "#242B66",
    borderRadius: "2px",
  },
  mainBox: {
    // padding: "0 10px 0 10px",
    borderBottom: "3px solid #8080802e",
  },
  Wallet_class: {
    width: "40px",
    height: "40px",
  },
  box1: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },
  yourWallet: {
    fontSize: "8px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "10px",
    marginLeft: "8px",
  },
  ZeroContent: {
    color: "white",
    fontSize: "22px",
    marginTop: "-12px",
    textAlign: "center",
    paddingBottom: "10px",
    fontFamily: "'Inter'",
    "@media(max-width:1280px)": {
      textAlign: "left",
      marginLeft: "56px",
    },
  },
  productIcons: {
    color: "#fff",
    padding: "10px",
    fontSize: "16px !important",
    // "&:hover": {
    //   background: "#80808059",
    // },
  },
}));

const NavBar = ({
  onMobileClose,
  openMobile,
  _productlist,
  setProductName,
  _getProductName,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [_sections, setSection] = useState("");
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <Box p={"5px 0 32px 0"}>
        <Box className={classes.mainBox}>
          <Typography
            variant="body1"
            style={{ color: "#fff", fontSize: "21px", textAlign: "center" }}
          >
            Business
          </Typography>
          {/* <Box className={classes.BITBox}>
            <Box className={classes.box1}>

              <img
                className={classes.Wallet_class}
                src="/images/Wallet_icons.png"
              ></img>
              <Typography className={classes.yourWallet}>
                Your Wallet Balance
              </Typography>
            </Box>
            <Typography className={classes.ZeroContent} variant="h4">
              0.00
            </Typography>
          </Box> */}
        </Box>
        {_productlist &&
          _productlist?.map((section, i) => {
            return (
              <List
                key={`menu${i}`}
                className={classes.productIcons}
                style={
                  _getProductName == section
                    ? { background: "#80808059", cursor: "pointer" }
                    : {
                        cursor: "pointer",
                      }
                }
              >
                <ListSubheader
                  onClick={() => setProductName(section ? section : "PMFBY")}
                  disableGutters
                  disableSticky
                  style={{
                    color: "#fff",
                  }}
                >
                  {section}
                </ListSubheader>
                {/* {renderNavItems({
              items: section.items,
              pathname: location.pathname,
            })} */}
              </List>
            );
          })}
      </Box>
    </PerfectScrollbar>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <img
            src="./images/DashBoardLogo.png"
            alt="image"
            className={classes.logo}
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
