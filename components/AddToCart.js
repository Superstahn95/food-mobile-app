import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/constants";

const AddToCart = ({ meal }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
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
    backgroundColor: colors.COLOR_PRIMARY,
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

export default AddToCart;
