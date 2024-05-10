import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AuthErrorComponent = ({ errorMsg, setErrorMsg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        <TouchableOpacity
          onPress={() => setErrorMsg("")}
          style={styles.iconContainer}
        >
          <AntDesign name="closecircle" size={24} color="black" />
        </TouchableOpacity>
        <MaterialIcons name="error" size={50} color="red" />
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height,
    width,
  },
  errorContainer: {
    backgroundColor: "#E2E8F0",
    // opacity: 0.8,
    width: 300, //might want to make this dynamic
    height: 200,
    borderRadius: 10,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  errorText: {
    color: "black",
    fontFamily: "Montserrat_700Bold",
    marginTop: 20,
  },
});

export default AuthErrorComponent;
