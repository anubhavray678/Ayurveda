import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ReuseableText from "../../Reuseable/ReuseableText";
import { COLORS, TEXT } from "../../../constants/themes";
import NetworkImage from "../../Reuseable/NetworkImage";
import HeightSpacer from "../../Reuseable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

const Herbtile = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Herbdetail", item)}>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />
        <HeightSpacer height={5} />
        <ReuseableText
          text={item.herb}
          family={"bold"}
          size={TEXT.Large}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Herbtile;

const styles = StyleSheet.create({});
