import { ScrollView, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { Signin, Registration } from "../screens/index";
import Signin from "../screens/authentication/Signin";
import Registration from "../screens/authentication/Registration";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants/themes";
import { HeightSpacer } from "../components";
import AssetImage from "../components/Reuseable/AssetImage";
const Tab = createMaterialTopTabNavigator();
const AuthTopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* <HeightSpacer height={20} /> */}

        <AssetImage
          data={require("../assets/images/auth/registration.png")}
          mode={"cover"}
          width={"100%"}
          height={250}
        />

        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default AuthTopTab;
