import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/pizza.jpg")}
      >
        <View style={styles.darkCover} />

        <View style={styles.contentWrapper}>
          <View style={styles.logoContainer}>
            {/* "#fdd835" */}
            {/* #1E293B */}
            {/* "#f57f17"  */}
            <Image
              style={styles.logo}
              source={require("../assets/images/rooku.png")}
            />
            {/* <Ionicons name="fast-food" size={50} color="#f57f17" /> */}
          </View>
          {/* <Text style={styles.welcomeText}>FIND FOOD YOU LOVE </Text> */}
          <Text style={styles.subtitle}>
            Discover the best food from over 200 varieties and delivery to your
            doorstep
          </Text>
          <View style={styles.controls}>
            <TouchableOpacity style={styles.logIn}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.register}>
              <Text style={styles.registerText}>Get started</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    height: screenHeight,
    width: screenWidth,
  },
  darkCover: {
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
  },
  contentWrapper: {
    // backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "white",
  },
  welcomeText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
    marginTop: 20,
  },
  subtitle: {
    fontFamily: "Montserrat_700Bold",
    marginTop: "5%",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
  logoContainer: {
    // marginTop: "20%",
  },
  logo: {
    height: 200,
    width: 200,
  },
  welcomeBox: {
    // backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    fontSize: 30,
  },
  controls: {
    width: "100%",
    marginTop: "40%",
    // marginBottom: "50%",
  },
  //   #e65100
  // #f57f17"
  logIn: {
    backgroundColor: "#e65100",
    paddingHorizontal: 7,
    paddingVertical: 10,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    borderRadius: 2,
  },
  loginText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  register: {
    backgroundColor: "#1E293B",
    // borderWidth: 2,
    // borderColor: "red",
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  registerText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
});

export default WelcomeScreen;
