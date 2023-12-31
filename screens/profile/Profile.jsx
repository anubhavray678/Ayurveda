import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import style from "./profile.style";
import { COLORS } from "../../constants/themes";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to log out", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },

      {
        text: "Continue",
        onPress: () => console.log("continue pressed"),
      },
    ]);
  };
  const deleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure you want delete account", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },

      {
        text: "Continue",
        onPress: () => console.log("Delete pressed"),
      },
    ]);
  };

  return (
    <View style={style.container}>
      <View style={style.container}>
        <StatusBar style="auto" />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/images/auth/profile_banner.jpg")}
            style={style.cover}
          />
        </View>
        <View style={style.profileContainer}>
          <Image
            source={require("../../assets/images/auth/profile.jpg")}
            style={style.profile}
          />
          <Text style={style.name}>
            {userLogin === true ? "Anubhav" : "Please login to your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <View style={style.loginBtn}>
                <Text style={style.menuTxt(COLORS.green)}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={style.loginBtn}>
              <Text style={style.menuTxt(COLORS.green)}>
                anubhavray678@gmail.com{" "}
              </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={style.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Legal")}>
                <View style={style.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="license"
                    size={24}
                    color={COLORS.green}
                  />
                  <Text style={style.menuTxt(COLORS.black)}>Legal</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={style.menuItem(0.2)}>
                  <AntDesign name="deleteuser" size={24} color={COLORS.green} />
                  <Text style={style.menuTxt(COLORS.black)}>
                    Delete Account
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={style.menuItem(0.2)}>
                  <AntDesign name="logout" size={24} color={COLORS.green} />
                  <Text style={style.menuTxt(COLORS.black)}>Log Out</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
