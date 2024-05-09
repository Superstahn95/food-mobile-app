import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Paystack } from "react-native-paystack-webview";
import CartScreenHeader from "../components/CartScreenHeader";
import CartContent from "../components/CartContent";
import CartTotal from "../components/CartTotal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import useAuth from "../hooks/auth";
import { getCartTotal } from "../features/cart/cartSlice";

const CartScreen = ({ navigation }) => {
  const [pay, setPay] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const total = useSelector(getCartTotal);
  const { user } = useAuth();
  const scrollRef = useRef(null);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CartScreenHeader navigation={navigation} />
        <ScrollView ref={scrollRef} style={styles.cartContent}>
          {cartItems.map((item) => (
            <CartContent key={item._id} item={item} />
          ))}
        </ScrollView>

        <CartTotal navigation={navigation} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // just added
    backgroundColor: "#E2E8F0",
  },
  cartContent: {
    padding: 10,
    flex: 1,
  },
});

export default CartScreen;

//refernce this while trying to place the order

// export const orderSchema = {
//   placeOrder: Joi.object({
//     deliveryInfo: Joi.object()
//       .keys({
//         deliveryAddress: Joi.string().required,
//         phoneNumber: Joi.string().required(),
//         deliveryAddressNumber: Joi.string().required(),
//       })
//       .required(),
//     orderedMeals: Joi.array().items(orderedMealSchema),
//     totalAmount: Joi.number().required(),
//     paymentReference: Joi.string()
//       .required()
//       .message("You need to make a payment first"),
//   }),
// };
// const orderedMealSchema = Joi.object({
//   quantity: Joi.number().integer().min(1).required(),
//   meal: Joi.string().required(),
// });
