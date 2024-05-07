import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartScreenHeader from "../components/CartScreenHeader";
import CartContent from "../components/CartContent";
import CartTotal from "../components/CartTotal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { useRef } from "react";

const CartScreen = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cart);
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
