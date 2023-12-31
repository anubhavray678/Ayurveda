import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "../../components/Reuseable/reuseable.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../../constants/themes";
import { ReuseableText } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import styles from "./medicine.style";

const Medicine = ({ navigation }) => {
  return (
    <SafeAreaView style={reuseable.container}>
      <View>
        <View style={reuseable.rowWithSpace("space-between")}>
          <ReuseableText
            text={"Medicine DIrectory"}
            family={"bold"}
            size={SIZES.Large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Medicine;
