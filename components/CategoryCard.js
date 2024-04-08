import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/constants";

const CategoryCard = ({ category }) => {
  return (
    // could be used as links to the category screens in which i will be listing out meals belonging to each individual category
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    backgroundColor: colors.COLOR_PRIMARY_SHADE,
    padding: 10,
    borderRadius: 5,
  },
  cardText: {
    fontFamily: "Montserrat_400Regular",
    textTransform: "capitalize",
  },
});

export default CategoryCard;
