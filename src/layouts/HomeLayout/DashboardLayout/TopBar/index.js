import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Hidden,
  SvgIcon,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import { TopBarData } from "./TopBarData";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.paper,
  },
  toolbar: {
    height: 80,
    padding: "0 20px",
    backgroundColor: "transparent",
    backgroundColor: "hsla(0deg, 0%, 100%, 0) !important",
    backdropFilter: "blur(44px)",
  },
  logo: {
    marginRight: theme.spacing(2),
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
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            style={{ marginRight: 10 }}
          >
            <SvgIcon fontSize="40px" style={{ background: "red" }}>
              <MenuIcon style={{ color: "#000" }} />
            </SvgIcon>
          </IconButton>
        </Hidden>
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
