import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/themes";

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.white,
    width: SIZES.width / 2.2,
    height: 40,
    borderRadius: 12,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  logo: {
    width: "50%",
    height: 40,
  },
});

export default styles;
