import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Loader from "../components/Loader";
import { Formik, Field } from "formik";
import * as yup from "yup";
import axiosInstance from "../utils/axios";
import useAuth from "../hooks/auth";
import AuthErrorComponent from "../components/AuthErrorComponent";
import CustomInput from "../components/CustomInput";

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { setUser, user } = useAuth();
  const initialValues = { email: "", password: "" };
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Enter password"),
  });
  const handleLogin = async (data) => {
    const { email, password } = data;
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("auth/mobile/login", {
        email,
        password,
      });
      const { token } = data.data;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(data.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.response.data.message);
      // handle error in a better way
      //   error.response.data.message to access the error message from my backend
    }
  };

  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, [user]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/rooku.png")}
        />
        {/* <Text>What do we have here today</Text> */}
      </View>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <View style={styles.formContainer}>
              <Text style={styles.formText}>Email Address</Text>
              <Field component={CustomInput} name="email" />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.formText}>Password</Text>
              <Field component={CustomInput} name="password" secureTextEntry />
            </View>
            <TouchableOpacity
              disabled={!isValid}
              onPress={handleSubmit}
              style={styles.formButton}
            >
              <Text style={styles.formButtonText}>Log in</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={styles.instructionWrapper}>
        <Text style={styles.instruction}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loader text={"Authenticating"} />}
      {errorMsg && (
        <AuthErrorComponent errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    // position: "relative",
  },
  logoContainer: {
    marginVertical: 20,
  },
  logo: {
    height: 100,
    width: 150,
    resizeMode: "contain",
  },
  welcomeText: {
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    color: "#e65100",
  },
  formContainer: {
    width: "90%", //handle when making responsive
    marginTop: 40,
  },
  formText: {
    fontFamily: "Montserrat_400Regular",
  },
  formInput: {
    borderBottomWidth: 1,
    borderColor: "#e65100",
  },
  formButton: {
    marginTop: 40,
    backgroundColor: "#e65100",
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    borderRadius: 2,
    width: "90%",
  },
  formButtonText: {
    color: "white",
  },
  instructionWrapper: {
    width: "90%",
    marginTop: 6,
    flexDirection: "row",
  },
  instruction: {
    fontFamily: "Montserrat_400Regular",
  },
  signUpText: {
    fontFamily: "Montserrat_400Regular",
    color: "#e65100",
  },
});

export default LoginScreen;
