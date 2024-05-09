import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CheckoutHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    // alignItems: "center",
    width,
    height: "15%",
    padding: 10,
    backgroundColor: "#E2E8F0",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default CheckoutHeader;
