import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/constants";

const AdjustQuantityControls = ({ quantity }) => {
  return (
    <View style={styles.cartControls}>
      <TouchableOpacity style={styles.addAndMinusButton}>
        <AntDesign name="minus" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={{ fontSize: 20 }}>{quantity}</Text>
      </View>
      <TouchableOpacity style={styles.addAndMinusButton}>
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
