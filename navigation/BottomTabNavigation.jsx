import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/themes";
import Medicine from "../screens/medicine/Medicine";
import AuthTopTab from "./AuthTopTab";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 0,
  borderRadius: 20,
  height: 70,
  position: "absolute",
  bottom: 10,
  left: 20,
  right: 20,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="3e2465"
      barStyle={{ paddingBottom: 40 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.green : COLORS.grey}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Medicine}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "capsules" : "capsules"}
              color={focused ? COLORS.green : COLORS.grey}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.green : COLORS.grey}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
