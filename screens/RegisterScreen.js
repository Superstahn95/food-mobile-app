import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import axiosInstance from "../utils/axios";
import useAuth from "../hooks/auth";
import Loader from "../components/Loader";
import AuthErrorComponent from "../components/AuthErrorComponent";
import CustomInput from "../components/CustomInput";

const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Enter password"),
    firstName: yup.string().required("Enter first name"),
    lastName: yup.string().required("Enter last name"),
    number: yup.string().required("Enter phone number"),
  });
  const initialValues = {
    email: "",
    password: "",
    number: "",
    firstName: "",
    lastName: "",
  };
  const { setUser, user } = useAuth();
  const handleRegister = async (data) => {
    const { email, firstName, lastName, number, password } = data;
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("auth/mobile/register", {
        email,
        firstName,
        lastName,
        number,
        password,
      });
      const { token } = data.data;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(data.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.response.data.message);
    }
  };
  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, [user]);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/rooku.png")}
            />
            {/* <Text>What do we have here today</Text> */}
          </View>
          <Text style={styles.welcomeText}>Create an account!</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values) => handleRegister(values)}
          >
            {({ handleSubmit, isValid }) => (
              <>
                <View style={styles.formContainer}>
                  <Text style={styles.formText}>First Name</Text>
                  <Field component={CustomInput} name="firstName" />
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.formText}>Last name</Text>
                  <Field component={CustomInput} name="lastName" />
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.formText}>Email address</Text>
                  <Field component={CustomInput} name="email" />
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.formText}>Phone number</Text>
                  <Field component={CustomInput} name="number" />
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.formText}>Password</Text>
                  <Field
                    component={CustomInput}
                    name="password"
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.formButton}
                >
                  <Text style={styles.formButtonText}>Sign up</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <View style={styles.instructionWrapper}>
            <Text style={styles.instruction}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signUpText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {loading && <Loader text="Signing Up" />}
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

export default RegisterScreen;
