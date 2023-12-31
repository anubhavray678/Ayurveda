import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AssetImage = ({ data, width, height, mode }) => {
  return (
    <View>
      <Image source={data} style={styles.imageContainer(width, height, mode)} />
    </View>
  );
};

export default AssetImage;

const styles = StyleSheet.create({
  imageContainer: (width, height, mode) => ({
    width: width,
    height: height,
    resizeMode: mode,
  }),
});
