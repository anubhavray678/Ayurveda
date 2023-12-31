import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import HeightSpacer from "./HeightSpacer";
import ReuseableText from "./ReuseableText";
import reuseable from "./reuseable.style";
import { COLORS, SIZES, TEXT } from "../../constants/themes";

const Reusabletile = ({ item, onPress }) => {
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
            text={item.department}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={8} />
          <ReuseableText
            text={item.description}
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

export default Reusabletile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
