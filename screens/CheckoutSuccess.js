import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../utils/constants";

const CheckoutSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your order has been received</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
});

export default CheckoutSuccess;
