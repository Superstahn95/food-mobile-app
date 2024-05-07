import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Loader from "../components/Loader";
import axiosInstance from "../utils/axios";
import useAuth from "../hooks/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, user } = useAuth();
  const handleLogin = async () => {
    if (!email || !password) {
      return console.log("Fields cannot be blank");
    }
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("auth/login", {
        email,
        password,
      });
      setUser(data.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
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

      <View style={styles.formContainer}>
        <Text style={styles.formText}>Email Address</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formText}>Password</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.formButton}>
        <Text style={styles.formButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.instructionWrapper}>
        <Text style={styles.instruction}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* to be removed when app is further worked on */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ marginTop: 20, backgroundColor: "yellow" }}
      >
        <Text>Temporary click action to home screen!!</Text>
        <Text>{user?.firstName}</Text>
      </TouchableOpacity> */}
      {loading && <Loader text={"Authenticating"} />}
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
