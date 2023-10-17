import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "../theme/typography";
const baseOptions = {
  typography,

  overrides: {},
};
const themesOptions = {};
export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
