import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "./reuseable.style";
import { AntDesign } from "@expo/vector-icons";
import ReuseableText from "./ReuseableText";
import { COLORS, TEXT } from "../../constants/themes";

const Appbar = ({ color, title, color1, icon, onPress }) => {
  return (
    <View style={styles.overlay}>
      <View style={reuseable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={25} />
        </TouchableOpacity>
        <ReuseableText
          text={title}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <TouchableOpacity style={styles.box1(color1)}>
          <AntDesign name={icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  box: (color) => ({
    backgroundColor: color,
    width: 40,
    height: 40,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 40,
    height: 40,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
