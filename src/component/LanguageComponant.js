import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { useDispatch, useSelector } from "react-redux";
// import { changeLanguage } from "src/Redux/Auth/action";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 70,
    // padding: "0 50px",
  },
  selectEmpty: {
    marginTop: "0px",
    color: "#fff",
  },
}));

export default function LanguageComponant() {
  const classes = useStyles();
  const [_language, setLanguage] = React.useState(
    window.localStorage.getItem("languageId") != null
      ? window.localStorage.getItem("languageId")
      : "hi"
  );

  //   const dispatch = useDispatch();
  const handleChange = (event) => {
    setLanguage(event.target.value);
    // window.location.reload();
  };
  //   useEffect(() => {
  //     if (window.localStorage.getItem("languageId") == null) {
  //       dispatch(changeLanguage({ langCode: "hi" }));
  //     }
  //   }, [window.localStorage.getItem("languageId") == null]);
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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl className={classes.formControl}>
          <Select
            labelId="select-label"
            value={_language}
            onChange={(e) => {
              handleChange(e);
              //   dispatch(changeLanguage({ langCode: e.target.value }));
              //   window.localStorage.setItem("languageId", e.target.value);
            }}
            // displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={menuProps}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"hi"}>हिंदी</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
