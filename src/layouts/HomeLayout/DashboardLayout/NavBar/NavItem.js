import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, Collapse, ListItem, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Logo from "src/component/Logo";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: "'Inter'",
    textAlign: "center",
  },
  button: {
    color: "#969ba1",
    padding: "10px 8px",
    justifyContent: "flex-start",
    display: "inline",

    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  buttonLeaf: {
    color: "#969ba1",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontSize: "14px",
    display: "block",
    textAlign: "left",
    borderRadius: 0,
    borderLeft: "2px solid #0f212e !important",
    // "&:hover": {
    //   background: "#ff157a",
    //   color: "#fafafa",
    // },
    "&.depth-0": {
      textAlign: "left",
      alignItems: "center",
      borderLeftWidth: "2px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      padding: "0.75rem 1.5rem",
      width: "100%",
      fontFamily: "'Inter' !important",
      // borderColor: "#1d1e20 !important",
      "&:hover": {
        color: "#fafafa",
        fontWeight: "400",
        background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        "& $icon": {
          // padding: "0 14px",
          // fontSize: "8px",
          // width: "16px",
          // height: "15.06px",
          color: "#DE1EE9 !important",
        },
      },
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "center",

        // fontFamily: "Mulish",
        // fontStyle: "normal",
        // // fontWeight: "600",
        // fontSize: "16px",
        // lineHeight: "20px",
        // letterSpacing: "0.2px",
        // color: "#A4A6B3",
      },
    },
  },
  icon: {
    display: "flex",
    // width: "32px",
    alignItems: "center",

    padding: "0 14px",
    // fontSize: "8px",
    width: "16px",
    height: "15.06px",
    color: "#fff !important",
    "&:hover": {
      color: "#DE1EE9 !important",
    },
  },
  title: {
    marginRight: "auto",
    color: "#fff",
  },
  active: {
    color: "#fafafa",
    fontWeight: "400",
    background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: theme.typography.fontWeightRegular,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
      color: "#fff",
    },
    "& $icon": {
      // color: "#fafafa",
      // fontSize: "12px",
      // color: "#E59446 !important",
      // padding: "0 14px",
      // fontSize: "8px",
      // width: "16px",
      // height: "15.06px",
      color: "#DE1EE9 !important",
      // margin: "0 0 0 5px",
    },
  },
}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 15 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={{ paddingLeft: "15px" }}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
