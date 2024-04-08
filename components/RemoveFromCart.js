import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../utils/constants";
import { removeItemFromCart } from "../features/cart/cartSlice";

const RemoveFromCart = ({ meal }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(removeItemFromCart(meal._id))}
      >
        <Text style={styles.buttonText}>Remove From Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 40,
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    bottom: 0,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
});

export default RemoveFromCart;
