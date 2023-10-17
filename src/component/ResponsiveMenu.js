import React, { useState } from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MandatesComponent from "../component/MandatesComponent";
import SubMenuChild from "../component/SubMenuChild";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    padding: "10px 0",
    justifyContent: "space-between",
    height: "76px !important",
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
}));
const MenuComponent = ({ openmenu, setMenu, data, index, value }) => {
  return (
    <Box key={index} class={"dropdown"}>
      <Box>
        <button
          className={openmenu == data?.menuValue ? "dropbtn" : "dropbtn1"}
          onClick={() => {
            setMenu(data?.menuValue);
          }}
        >
          {data?.menuValue}
        </button>
      </Box>

      {value == "TOPVALUE" ? (
        <SubMenuChild CompanyTitle={data?.MenuDataValue} openmenu={openmenu} />
      ) : (
        <>
          {data?.MenuDataValue.length != 0 && (
            <div
              class="dropdown-content"
              style={value == "TOPVALUE" ? { background: "#0e2207" } : {}}
            >
              <MandatesComponent
                className="SocialIcons"
                data={data?.MenuDataValue}
                openmenu={openmenu}
              />
            </div>
          )}
        </>
      )}
    </Box>
  );
};

export default MenuComponent;
