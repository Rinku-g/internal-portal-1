import React from "react";
import { makeStyles, Box } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import SearchIcon from '@material-ui/icons/Search';
const theme = createMuiTheme({
  overrides: {},
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    background: "rgb(25 26 30)",
    margin: "5px",
    height: "25px",
    marginRight: "55px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
    fontSize: "14px",
    "&::placeholder": {
      color: "#fff", // Change this to the desired placeholder color
    },
  },
  iconButton: {
    padding: 10,
    color: "#fff",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search in Site.."
          inputProps={{
            style: { color: "#fff", fontSize: "14px" },
            "aria-label": "search in Site..",
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}
