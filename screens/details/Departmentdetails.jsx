import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "../../components/Reuseable/Appbar";
import { COLORS } from "../../constants/themes";
import { useRoute } from "@react-navigation/native";
const Departmentdetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  // console.log(id);
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <Appbar
          title={"ENT Department"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Departmentdetails;

const styles = StyleSheet.create({});
