import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "../../components/Reuseable/Appbar";
import { COLORS, SIZES } from "../../constants/themes";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  ReuseableBtn,
  ReuseableText,
} from "../../components";

const Herbdetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  // console.log(item);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={{ marginTop: 50 }}>
            <NetworkImage
              source={item.imageUrl}
              width={"100%"}
              height={SIZES.height / 2.5}
              radius={12}
            />
          </View>

          <Appbar
            title={item.herb}
            color={COLORS.white}
            // icon={"search1"}
            // color1={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.description}>
          <View style={{ alignContent: "center" }}>
            <DescriptionText text={item.description} />
          </View>
          <ReuseableText
            text={`Benefits of ${item.herb}`}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.green}
          />
          <HeightSpacer height={10} />
          <ReuseableText
            text={item.benefits.point1}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.green}
          />

          <DescriptionText text={item.benefits.desc1} />

          <HeightSpacer height={10} />

          <ReuseableText
            text={item.benefits.point2}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.green}
          />

          <DescriptionText text={item.benefits.desc2} />

          <HeightSpacer height={10} />

          <ReuseableText
            text={item.benefits.point3}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.green}
          />

          <DescriptionText text={item.benefits.desc3} />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: COLORS.green,
          position: "absolute",
          bottom: 0,
        }}
      >
        <ReuseableBtn
          onPress={() => Linking.openURL(item.productLink)}
          btnText={`Buy ${item.herb}`}
          textColor={COLORS.white}
          width={SIZES.width}
          backgroundColor={COLORS.green}
          // borderWidth={}
          // borderColor={}
          loader={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Herbdetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    // height: SIZES.height,
  },
  description: {
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 45,
  },
});
