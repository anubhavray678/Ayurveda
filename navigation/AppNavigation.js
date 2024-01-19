import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getItem } from "../utils/asyncStorage.js";
import { StatusBar } from "react-native";

import {
  Departmentdetails,
  Departmentlist,
  Herbdetails,
  Legal,
  OnboardPage,
  Registration,
  Search,
  Signin,
  Ent,
  Anatomy,
  Balaroga,
  Brain,
  Kaya,
  Pathology,
  Sexology,
  Striroga,
  Surgery,
} from "../screens/index.js";
import BottomTabNavigation from "./BottomTabNavigation.jsx";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded");
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboard">
          <Stack.Screen
            name="Onboard"
            component={OnboardPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Herbdetails"
            component={Herbdetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Departmentdetails"
            component={Departmentdetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Departmentlist"
            component={Departmentlist}
            options={{
              headerShown: true,
              headerTitle: "Med by Departments",
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Legal"
            component={Legal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Ent"
            component={Ent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Anatomy"
            component={Anatomy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Balaroga"
            component={Balaroga}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Brain"
            component={Brain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pathology"
            component={Pathology}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Kaya"
            component={Kaya}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sexology"
            component={Sexology}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Striroga"
            component={Striroga}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Surgery"
            component={Surgery}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bottom">
          <Stack.Screen
            name="Ent"
            component={Ent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Anatomy"
            component={Anatomy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Balaroga"
            component={Balaroga}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Brain"
            component={Brain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pathology"
            component={Pathology}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Kaya"
            component={Kaya}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sexology"
            component={Sexology}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Striroga"
            component={Striroga}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Surgery"
            component={Surgery}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboard"
            component={OnboardPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Herbdetails"
            component={Herbdetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Departmentdetails"
            component={Departmentdetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Departmentlist"
            component={Departmentlist}
            options={{
              headerShown: true,
              headerTitle: "Med by Departments",
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Legal"
            component={Legal}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}
