import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import {
  HeightSpacer,
  ReuseableBtn,
  ReuseableText,
} from "../../components/index";
import { COLORS, SIZES } from "../../constants/themes";

import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReuseableText
          text={item.title}
          family={"xtrabold"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={20} />
        <ReuseableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.green}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
