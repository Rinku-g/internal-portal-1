/* eslint-disable no-use-before-define */
import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, makeStyles, Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const menuProps = {
  getContentAnchorEl: null,
  disableScrollLock: true,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation8: {
        marginLeft: "-15px",
      },
    },
    MuiInput: {
      underline: {
        "&:after": {
          borderBottom: "2px solid #fff", // Change the underline to a green line after focus
        },
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "none !important",
        },
      },
    },
    MuiSelect: {
      icon: {
        color: "#fff",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 200,
    top: 0,
    height: "100%",
    background: theme.palette.primary.main,
  },
  avatar: {
    cursor: "pointer",
    width: "100%",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <FormControl className={classes.avatar}>
        <Select labelId="select-label" value={""}>
          <MenuItem value={"en"}>English</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
