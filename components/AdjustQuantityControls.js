import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/constants";
import {
  increasItemQuantity,
  decreaseItemQuantity,
} from "../features/cart/cartSlice";

const AdjustQuantityControls = ({ id }) => {
  const dispatch = useDispatch();
  //pass in id and quantity
  const handleIncrease = () => {
    dispatch(increasItemQuantity(id));
  };
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(id));
  };
  //get object from cart
  const { cartItems } = useSelector((state) => state.cart);
  const cartItem = cartItems.find((item) => item._id === id);
  return (
    <View style={styles.cartControls}>
      <TouchableOpacity
        style={styles.addAndMinusButton}
        disabled={cartItem?.quantity === 1}
        onPress={handleDecrease}
      >
        <AntDesign name="minus" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={{ fontSize: 20 }}>{cartItem?.quantity}</Text>
      </View>
      <TouchableOpacity
        style={styles.addAndMinusButton}
        onPress={handleIncrease}
      >
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    padding: 10,
  },
  addAndMinusButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 5,
  },
});

export default AdjustQuantityControls;
