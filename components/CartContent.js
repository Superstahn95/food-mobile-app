import { View, Text, Image, StyleSheet } from "react-native";
import AdjustQuantityControls from "./AdjustQuantityControls";

const CartContent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: item.mealImage }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.price}</Text>
        </View>
        <View style={{ marginRight: 5 }}>
          <AdjustQuantityControls quantity={item.quantity} />
        </View>
      </View>
    </View>
  );
};

//handle the look of this styling for much larger screens
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "white",
    // backgroundColor: "#E2E8F0",
    borderRadius: 20,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {},
  image: {
    height: 100,
    width: 100,
    // overflow: "hidden",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
    // alignItems: "center",
    // justifyContent: "center",
  },
  itemText: {
    fontFamily: "Montserrat_400Regular",
    textTransform: "capitalize",
  },
});

export default CartContent;
