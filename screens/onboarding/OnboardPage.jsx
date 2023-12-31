import { Image, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { COLORS, SIZES } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../../utils/asyncStorage";

const OnboardPage = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Bottom");
    setItem("onboarded", "1");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        titleStyles={styles.titleStyle}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={require("../../assets/images/onboarding1.png")}
                style={styles.imageContainer}
              />
            ),
            title: "Ayurvedic medicines at one place",
            subtitle: "",
          },
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={require("../../assets/images/onboarding2.png")}
                style={styles.imageContainer}
              />
            ),
            title: "No reaction, natural medicines",
            subtitle: "",
          },
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default OnboardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    height: SIZES.height,
    width: SIZES.width,
    resizeMode: "cover",
    marginTop: 40,
  },
  titleStyle: {
    fontFamily: "bold",
    fontSize: SIZES.xxLarge,
    position: "absolute",
    bottom: 0,
    marginBottom: 100,
    right: -90,
  },
});
