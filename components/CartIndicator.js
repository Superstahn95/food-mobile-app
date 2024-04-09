import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Foundation } from "@expo/vector-icons";
import { colors } from "../utils/constants";

const CartIndicator = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Cart")}
    >
      <View style={styles.iconContainer}>
        <Foundation name="shopping-cart" size={30} color="white" />
        <View style={styles.countContainer}>
          <Text style={styles.count}>{cartItems.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.COLOR_PRIMARY,
    right: 20,
    top: "80%",
    // padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  iconContainer: {
    position: "relative",
  },
  countContainer: {
    position: "absolute",
    top: -5,
    right: -10,
  },
  count: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 15,
  },
});

export default CartIndicator;
