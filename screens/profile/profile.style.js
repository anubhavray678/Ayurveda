import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/themes";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.green,
    resizeMode: "cover",
    marginTop: -85,
  },
  name: {
    fontFamily: "bold",
    color: COLORS.green,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.white,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.grey,
    borderRadius: SIZES.xxLarge,
  },
  menuTxt: (color) => ({
    fontFamily: "regular",
    color: color,
    marginLeft: 20,
    marginRight: 18,
    fontSize: 14,
    lineHeight: 26,
  }),
  menuWrapper: {
    marginTop: SIZES.xxLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.grey,
  }),
});

export default style;
