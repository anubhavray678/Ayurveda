import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/themes";
import NetworkImage from "../../Reuseable/NetworkImage";
import HeightSpacer from "../../Reuseable/HeightSpacer";
import ReuseableText from "../../Reuseable/ReuseableText";

const Bannercard = ({ item, margin, onPress, mode }) => {
  return (
    <View style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={"95%"}
            height={"100%"}
            radius={16}
            mode={mode}
          />
        </View>
        <HeightSpacer height={5} />
      </View>
    </View>
  );
};

export default Bannercard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 1.25,
    height: 220,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    margin: margin,
    justifyContent: "center",
  }),
  imageContainer: {
    alignItems: "center",
    marginTop: 5,
    height: 200,
  },
});
