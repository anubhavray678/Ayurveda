import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import ReuseableText from "./ReuseableText";
import HeightSpacer from "./HeightSpacer";
import ReuseableBtn from "../Buttons/ReuseableBtn";
import { COLORS, SIZES, TEXT } from "../../constants/themes";
import reuseable from "./reuseable.style";

const MedicineTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reuseable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReuseableText
            text={item.disease}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={8} />
          <ReuseableText
            text={item.therapy}
            family={"medium"}
            size={TEXT.small}
            color={COLORS.grey}
          />
          <HeightSpacer height={8} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MedicineTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
