import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "../../components/Reuseable/Appbar";
import { COLORS, SIZES } from "../../constants/themes";
import MedicineTile from "../../components/Reuseable/MedicineTile";

const Kaya = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const Kaya = [];
  return (
    <SafeAreaView style={{ marginHorizontal: 20, marginBottom: 50 }}>
      <View style={{ height: 50 }}>
        <Appbar
          title={item.department}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPressSearch={() => navigation.navigate("Search")}
        />
      </View>
      <FlatList
        data={Kaya}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: SIZES.small }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <MedicineTile
              item={item}
              onPress={() => navigation.navigate("Departmentdetails", { item })}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Kaya;

const styles = StyleSheet.create({});
