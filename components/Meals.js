import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { meals } from "../assets/data";
import MealCard from "./MealCard";

const Meals = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={meals}
        renderItem={({ index, item }) => <MealCard meal={item} index={index} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
    //   {meals.map((meal) => (
    //     <MealCard meal={meal} key={meal.id} />
    //   ))}
    // </FlatList
    // >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Meals;
