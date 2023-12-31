import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from "./home.style";
import reuseable from "../../components/Reuseable/reuseable.style";
import { StatusBar } from "expo-status-bar";
import { Banner, HeightSpacer, Herbs, ReuseableText } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/themes";
import Departments from "../../components/Home/Departments";
import logo from "../../assets/adaptive-icon.png";
const Home = () => {
  return (
    <SafeAreaView style={reuseable.container}>
      <View style={reuseable.rowWithSpace("space-between")}>
        <ReuseableText
          text={"Hey User!"}
          family={"bold"}
          size={SIZES.Large}
          color={COLORS.black}
        />

        <View style={styles.box}>
          <ReuseableText
            text={"Aushadhi"}
            family={"xtrabold"}
            size={SIZES.Large}
            color={COLORS.green}
          />
          <Image source={logo} style={styles.logo} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 70 }}>
          <HeightSpacer height={10} />
          <ReuseableText
            text={"Herbs"}
            family={"medium"}
            size={TEXT.Large}
            color={COLORS.black}
          />
          <Herbs />
          <HeightSpacer height={15} />
          <Banner />
          <HeightSpacer height={25} />
          <Departments />
          <HeightSpacer height={25} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
