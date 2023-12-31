import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  BackBtn,
  HeightSpacer,
  ReuseableBtn,
  WidthSpacer,
} from "../../components";
import AssetImage from "../../components/Reuseable/AssetImage";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});
const Signin = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const login = async (value) => {
    setLoader(true);
    try {
      const endpoint = "http://localhost:4000/api/login";
      const data = value;
      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        console.log(response.data);
      } else {
        Alert.alert("Error login in", "please provide valid credentials", [
          {
            text: "Cancel",
            onPress: () => console.log("cancel pressed"),
          },

          {
            text: "Continue",
            onPress: () => console.log("Delete pressed"),
          },
        ]);
      }
    } catch (error) {
      Alert.alert("Error", "something bad happens", [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
        },

        {
          text: "Continue",
          onPress: () => console.log("Delete pressed"),
        },
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{}}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <AssetImage
            data={require("../../assets/images/auth/registration.png")}
            mode={"cover"}
            width={"100%"}
            height={250}
          />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
              login(value);
            }}
          >
            {({
              handleChange,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View style={{ paddingTop: 30 }}>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View>
                    <View
                      style={styles.inputWrapper(
                        touched.email ? COLORS.blue : COLORS.lightGrey
                      )}
                    >
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color="grey"
                      />
                      <WidthSpacer width={10} />
                      <TextInput
                        placeholder="Enter email"
                        onFocus={() => {
                          setFieldTouched("email");
                        }}
                        onBlur={() => {
                          setFieldTouched("email", "");
                        }}
                        onChange={handleChange("email")}
                        value={values.email}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChange("email")}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={styles.errorMessage}>{errors.email}</Text>
                    )}
                  </View>
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View>
                    <View
                      style={styles.inputWrapper(
                        touched.password ? COLORS.blue : COLORS.lightGrey
                      )}
                    >
                      <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        color="grey"
                      />
                      <WidthSpacer width={10} />
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter password"
                        onFocus={() => {
                          setFieldTouched("password");
                        }}
                        onBlur={() => {
                          setFieldTouched("password", "");
                        }}
                        value={values.password}
                        onChange={handleChange("password")}
                        autoCapitalize="none"
                        onChangeText={handleChange("password")}
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          setObsecureText(!obsecureText);
                        }}
                      >
                        <MaterialCommunityIcons
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                </View>

                <HeightSpacer height={20} />
                <ReuseableBtn
                  onPress={handleSubmit}
                  btnText={"L O G I N"}
                  width={SIZES.width - 40}
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.lightWhite}
                  loader={loader}
                />
                <HeightSpacer height={20} />

                <Text
                  onPress={() => navigation.navigate("Registration")}
                  style={styles.registration}
                >
                  Create an Account
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Signin;
