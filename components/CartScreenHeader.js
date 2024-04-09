import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { colors } from "../utils/constants";

const { width } = Dimensions.get("window");

const CartScreenHeader = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Food Basket</Text>
        <View style={styles.iconWrapper}>
          <Foundation name="shopping-cart" size={24} color="black" />
          <View style={styles.countContainer}>
            <Text style={styles.count}>{cartItems.length}</Text>
          </View>
        </View>
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
  iconWrapper: {
    position: "relative",
  },
  countContainer: {
    position: "absolute",
    right: -7,
    top: -15,
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 2,
    height: 20,
    width: 20,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 15,
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
});

export default CartScreenHeader;
