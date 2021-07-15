import { DefaultTheme } from "@react-navigation/native";

import defaultStyles from "../config/styles";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.white,
  },
};

export default myTheme;
