import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector } from "react-redux";
import { getCartTotal } from "../features/cart/cartSlice";
import { colors } from "../utils/constants";

const CartTotal = ({ pay, setPay }) => {
  const total = useSelector(getCartTotal);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{total}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>____</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>{total}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setPay(true)}>
          <Text style={styles.buttonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  totalContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
    marginBottom: 5,
    // marginTop: 30,
  },
  text: {
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    backgroundColor: colors.COLOR_PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
});

export default CartTotal;
