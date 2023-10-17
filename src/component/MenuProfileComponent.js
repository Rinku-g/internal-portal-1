import React from "react";
import {
  Button,
  makeStyles,
  Box,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Typography,
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& button": {
      minWidth: "130px",
      color: "#fff",
    },
    "& h6": {
      fontSize: "12px",
      textAlign: "center",
      fontWeight: "600",
      color: "#fff",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  profletext: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "pre",
    cursor: "pointer",
    "& h6": {
      textAlign: "left !important",
      paddingLeft: "2px",
      fontSize: "15px",
    },
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box className={classes.root}>
      <Box>
        <Box
          fullWidth
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          className={classes.profletext}
          onClick={handleToggle}
        >
          &nbsp; <Typography variant="h6">User Name</Typography>
          <ExpandMoreIcon style={{ fontSize: "20px" }} />
        </Box>
        <Box textAlign={"left"}>
          <Typography
            variant="h6"
            style={{
              textAlign: "left",
              // paddingLeft: "18px",
              lineHeight: "4px !important",
            }}
          >
            &nbsp;&nbsp; User Name
          </Typography>
        </Box>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Box>
  );
}
