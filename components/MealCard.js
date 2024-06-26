import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import Animated from "react-native-reanimated";

const SkeletonCommonProps = {
  colorMode: "light",
  backgroundColor: "#D4D4D4",
  transition: { type: "timing", duration: 2000 },
};

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
      {/* <Skeleton
        show
        width={"100%"}
        height={200}
        colorMode="light"
        backgroundColor="#D4D4D4"
        transition={{ type: "timing", duration: 2000 }}
      > */}
      <Image
        source={{
          uri: meal.mealImage,
        }}
        style={styles.cardImage}
      />
      {/* </Skeleton> */}
      {/* <Skeleton> */}
      <Text style={styles.cardText}>{meal?.name}</Text>
      {/* </Skeleton> */}
      {/* <Skeleton> */}
      <Text style={styles.cardText}>{meal?.price}</Text>
      {/* </Skeleton> */}
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
    textTransform: "capitalize",
  },
});

export default MealCard;
