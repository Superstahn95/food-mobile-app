import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//handle responsiveness on the meal card
const MealCard = ({ meal, index }) => {
  const navigation = useNavigation();
  //   pass in route parameters via the onpress navigation
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Meal", { mealId: meal._id })}
      style={[
        styles.card,
        index % 2 === 0 ? styles.marginRight : styles.marginLeft,
      ]}
    >
      {/* "../assets/images/rice.jpg" */}
      <Image
        source={{
          uri: meal.mealImage,
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>{meal?.name}</Text>
      <Text style={styles.cardText}>{meal?.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E2E8F0",
    // width: "49%",
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  marginRight: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardText: {
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
  },
});

export default MealCard;
