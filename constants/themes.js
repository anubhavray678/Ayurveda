import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = {
  blue: "#4267B2",
  red: "#EB6A58",
  green: "#449282",
  white: "#FBFBFB",
  lightWhite: "#FFFFFF",
  black: "#121212",
  dark: "#3D3A45",
  grey: "#8C8896",
  lightGrey: "#D1CFD5",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const TEXT = {
  xSmall: 11,
  small: 13,
  medium: 15,
  large: 17,
  xLarge: 21,
  xxLarge: 32,
};

export { SIZES, TEXT, COLORS, Dimensions };
