import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "../../components/Reuseable/Appbar";
import { COLORS } from "../../constants/themes";

const Herbdetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 50 }}>
        <Appbar
          title={"Tulsi"}
          color={COLORS.white}
          // icon={"search1"}
          // color1={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Herbdetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
  },
});
