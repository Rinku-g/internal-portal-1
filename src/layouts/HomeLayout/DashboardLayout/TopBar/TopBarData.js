import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import { AuthContext } from "src/context/Auth";
import { UserContext } from "src/context/User";
// import SearchField from "src/component/SearchField";
// import { UserContext } from "src/context/UserAuth";
// UserContext
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  IconButton,
  Badge,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Grid,
  Avatar,
  Divider,
  Popper,
  // Hidden,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.paper,
  },
  toolbar: {
    height: 80,
    backgroundColor: "hsla(0deg, 0%, 100%, 0) !important",
    backdropFilter: "blur(44px)",
    "& .MuiIconButton-root": {
      padding: "0px",
    },
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  logo1: {
    width: "164px",
    cursor: "pointer",
    height: "30px",
    paddingLeft: "16px",
    // "@media (max-width: 400px)": {
    //   width: "100px",
    //   height: "20px",
    //   padding: "0",
    // },
    // "@media (max-width: 500px, min-width: 400px)": {
    //   width: "140px",
    //   height: "30px",
    //   padding: "0",
    // },"@media (max-width: 400px)": {
    //   width: "100px",
    //   height: "20px",
    //   padding: "0",
    // },
    // "@media (max-width: 500px, min-width: 400px)": {
    //   width: "140px",
    //   height: "30px",
    //   padding: "0",
    // },
    "@media (max-width: 1279px)": {
      display: "none",
    },
  },

  icon: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  Accordian: {
    // width: "600px",
    "& .MuiAccordionDetails-root": {
      display: "block",
    },
  },
  handleDialog: {
    "@media (max-width:500px)": {
      minwidth: "200px",
    },
    "& .MuiDialog-paperScrollPaper": { maxHeight: "78vh" },
    "& .walletheading": {
      width: " 500px",
      margin: 0,
      display: "flex",
      alignItems: " center",
      justifyContent: "space-between",
      borderBottom: " 1px solid #cecece",
      padding: " 5px",
      paddingBottom: "20px",
      fontSize: "14px",
      color: "#000",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: " 100%  ",
      },
      "& span": {
        position: "absolute",
        bottom: 3,
        right: 5,
        fontSize: "12px",
        color: "#9e9e9e",
      },
    },
    "& .notificationexpand": {
      textAlign: "center",
    },
    "& .MuiDialogContent-root": {
      "@media (max-width:500px)": {
        // width: "264px",
        // textAlign: "center",
        width: "307px",
        // display: "flex",
        // flexDirection: "column",
      },
      "@media (max-width:380px)": {
        // width: "264px",
        // textAlign: "center",
        width: "250px",
        // display: "flex",
        // flexDirection: "column",
      },

      "@media (max-width:350px)": {
        // width: "264px",
        // textAlign: "center",
        width: "210px",
        // display: "flex",
        // flexDirection: "column",
      },
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiDialog-container": {
      position: "absolute",
      right: 1,
      top: "6%",
    },
    "& .MuiDialog-scrollPaper": {
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
    },
  },
  namePlace: {
    "& .MuiDialog-container": {
      maxHeight: "78%",
      minWidth: "214",
    },
  },

  newRuleOn: {
    border: "1px solid black",
    width: "300px",
    height: "160px",
    // position: "absolute",
    display: "none",
    alignItems: "center",
    marginTop: "40px",
    top: "50%",
    right: "0%",
  },
  handleHide: {
    display: "none",
  },
  handleShow: {
    display: "block",
  },
  divide: {
    height: "45px",
    margin: "0 32px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 10px",
    },
  },
  btn: {
    "& .MuiIconButton-root": {
      padding: "12px",
      [theme.breakpoints.down("xs")]: {
        padding: "4px",
      },
    },
  },
  text: {
    fontSize: "15px",
    lineHeight: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData(props) {
  const classes = useStyles();
  const [openSearch, setopenSearch] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseSearch = () => {
    setopenSearch(false);
  };

  const history = useHistory();

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]); //eslint-disable-line

  const logOut = () => {
    history.push("/login");
    window.localStorage.removeItem("token");
  };

  const HiddenShow = async () => {
    var get = document.getElementById("showNotification");
    get.style.display = "none";
    var get1 = document.getElementById("showNotification1");
    get1.style.display = "none";
    var set = document.getElementById("hideNotification");
    set.style.display = "block";
  };

  return (
    <>
      <img
        src="images/DashBoardLogo.png"
        alt="sfsdg"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
      />

      <Box flexGrow={1} />
      <Badge className={classes.namePlace} color="secondary"></Badge>
      <Box display="block" alignItems="center">
        <Typography variant="body1" className={classes.text}>
          <b>Shiwani Singh</b>
        </Typography>
        <br />
        <Box>
          <Typography
            variant="body1"
            className={classes.text}
            style={{
              color: "gray",
            }}
          >
            samantha@email.com
          </Typography>
        </Box>
      </Box>
      <IconButton onClick={(e) => history.push("/login")}>
        <Badge
          className={classes.namePlace}
          // badgeContent={user.NotificationCount}
          color="secondary"
          // auth.unreadCount !== 0 ?
          // variant={user.unreadCount === 0 ? "" : "dot"}
        >
          <Avatar src="/images/Profile.png" alt="image" />
        </Badge>
      </IconButton>
    </>
  );
}
