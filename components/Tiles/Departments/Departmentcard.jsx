import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/themes";
import NetworkImage from "../../Reuseable/NetworkImage";
import HeightSpacer from "../../Reuseable/HeightSpacer";
import ReuseableText from "../../Reuseable/ReuseableText";

const Departmentcard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          />
        </View>
        <HeightSpacer height={5} />
        <View style={{ padding: 10 }}>
          <ReuseableText
            text={item.department}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
        </View>
        <HeightSpacer height={5} />
      </View>
    </TouchableOpacity>
  );
};

export default Departmentcard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    height: 150,
  },
});
