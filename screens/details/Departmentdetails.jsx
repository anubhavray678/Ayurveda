import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "../../components/Reuseable/Appbar";
import { COLORS, SIZES } from "../../constants/themes";
import { useRoute } from "@react-navigation/native";
import Departmentcard from "../../components/Tiles/Departments/Departmentcard";
import Reusabletile from "../../components/Reuseable/Reusabletile";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  ReuseableText,
} from "../../components";
const Departmentdetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  // console.log(item);

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <Appbar
          title={item.disease}
          color={COLORS.white}
          icon={""}
          color1={COLORS.screen}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={SIZES.height / 2.5}
            radius={12}
            mode={"contain"}
          />
        </View>
        <View style={styles.description}>
          <View style={{ alignContent: "center" }}>
            <ReuseableText
              text={`About ${item.disease}  : `}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.green}
            />
            <DescriptionText text={item.description} />
          </View>
          <ReuseableText
            text={"Medicine :"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.green}
          />
          <HeightSpacer height={10} />

          <ReuseableText
            text={item.medicine}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.blue}
          />
          <HeightSpacer height={10} />

          <ReuseableText
            text={"Uses :"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.green}
          />

          <DescriptionText text={item.use} />

          <ReuseableText
            text={"Therapy :"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.green}
          />
          <HeightSpacer height={10} />

          <ReuseableText
            text={item.therapy}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.blue}
          />
          <HeightSpacer height={10} />

          <ReuseableText
            text={"About the Therapy :"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.green}
          />
          <DescriptionText text={item.therapy_elaborate} />
        </View>
        {/* <FlatList
        data={departments}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.small }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Reusabletile
              item={item}
              onPress={() => navigation.navigate("Departmentdetails", { item })}
            />
          </View>
        )}
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Departmentdetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    // height: SIZES.height,
  },
  description: {
    marginHorizontal: 5,
    padding: 15,
    marginBottom: 45,
  },
});
