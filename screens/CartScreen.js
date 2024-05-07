import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import CartScreenHeader from "../components/CartScreenHeader";
import CartContent from "../components/CartContent";
import CartTotal from "../components/CartTotal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CartScreen = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CartScreenHeader navigation={navigation} />
        <ScrollView style={styles.cartContent}>
          {cartItems.map((item) => (
            <CartContent key={item._id} item={item} />
          ))}
        </ScrollView>

        <CartTotal />
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
