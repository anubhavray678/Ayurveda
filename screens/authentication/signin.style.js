import { StyleSheet } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: TEXT.small,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    fontSize: TEXT.small,
    marginTop: 5,
    marginRight: 5,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
  },
});
export default styles;
