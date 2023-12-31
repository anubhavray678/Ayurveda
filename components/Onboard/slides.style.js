import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/themes";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 30,
  },
  container: {
    backgroundColor: COLORS.black,
  },
});

export default styles;
