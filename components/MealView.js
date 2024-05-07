import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/constants";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
import AdjustQuantityControls from "./AdjustQuantityControls";

const { height, width } = Dimensions.get("window");
const MealView = ({ meal, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);
  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item._id === itemId);
  };
  //get cart item
  const itemExistInCart = isItemInCart(meal._id);
  const cartItem = cartItems.find((item) => item._id === meal._id);
  const handleAbsentItemQuantity = (action) => {
    if (action === "add") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus") {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mealImageContainer}>
        <Image source={{ uri: meal.mealImage }} style={styles.mealImage} />
        <View style={styles.overlay} />
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle"
              size={40}
              color={colors.COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="heart" size={30} color={colors.COLOR_PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {/* name of the meal */}
        <Text style={styles.mealName}>{meal.name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.mealPrice}>{meal.price}</Text>
          {/* cart controls */}
          {cartItem ? (
            <AdjustQuantityControls id={meal._id} />
          ) : (
            <View style={styles.cartControls}>
              <TouchableOpacity
                onPress={() => handleAbsentItemQuantity("minus")}
                style={styles.addAndMinusButton}
                disabled={quantity === 1}
              >
                <AntDesign name="minus" size={24} color="white" />
              </TouchableOpacity>
              <View style={styles.quantity}>
                <Text style={{ fontSize: 20 }}>{quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleAbsentItemQuantity("add")}
                style={styles.addAndMinusButton}
              >
                <AntDesign name="plus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {capitalizeFirstLetter(meal.description)}
          </Text>
        </View>

        {/* get meals that belongs to the same category */}
      </View>
      {/* add  to cart or remove from cart  button component */}
      {cartItem ? (
        <RemoveFromCart
          meal={meal}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ) : (
        <AddToCart meal={meal} quantity={quantity} setQuantity={setQuantity} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealImageContainer: {
    width,
    height: "40%",
    position: "relative",
  },
  mealImage: {
    height: "100%",
    width: "100%",
    // objectFit: "cover",
  },
  controls: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  detailsContainer: {
    marginTop: 5,
    padding: 10,
  },
  mealName: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 25,
    textTransform: "capitalize",
  },
  mealPrice: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
  quantity: {
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // paddingHorizontal: 10,
    padding: 10,
  },
  addAndMinusButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 5,
  },
  descriptionContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  descriptionText: {
    fontFamily: "Montserrat_400Regular",
    // textTransform: "capitalize",
    fontSize: 14,
  },
});

export default MealView;
