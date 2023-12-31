import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
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
import { SafeAreaView } from "react-native-safe-area-context";
import AssetImage from "../../components/Reuseable/AssetImage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  username: Yup.string()
    .min(3, "username must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});

const Registration = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{}}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <AssetImage
            data={require("../../assets/images/auth/signin.png")}
            mode={"cover"}
            width={"100%"}
            height={250}
          />
          <Formik
            initialValues={{ email: "", password: "", username: "" }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
              console.log(value);
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
                  <Text style={styles.label}>Username</Text>
                  <View>
                    <View
                      style={styles.inputWrapper(
                        touched.username ? COLORS.blue : COLORS.lightGrey
                      )}
                    >
                      <MaterialCommunityIcons
                        name="face-man-profile"
                        size={20}
                        color="grey"
                      />
                      <WidthSpacer width={10} />
                      <TextInput
                        placeholder="Enter username"
                        onFocus={() => {
                          setFieldTouched("username");
                        }}
                        onBlur={() => {
                          setFieldTouched("username", "");
                        }}
                        onChange={handleChange("username")}
                        value={values.username}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.username && errors.username && (
                      <Text style={styles.errorMessage}>{errors.username}</Text>
                    )}
                  </View>
                </View>
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
                  btnText={"REGISTER"}
                  width={SIZES.width - 40}
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.lightWhite}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Registration;
