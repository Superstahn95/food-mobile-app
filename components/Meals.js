import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import axiosInstance from "../utils/axios";

const Meals = () => {
  const [dishes, setDishes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("meal");
        setDishes(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);
  //write a function to retry fetching if meal fails for some reason
  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <Text>Fetching meals</Text>
        </View>
      ) : (
        dishes && (
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item._id}
            data={dishes}
            renderItem={({ index, item }) => (
              <MealCard meal={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
        )
      )}
      {error && <Text>Unable to fetch meals. Click to retry </Text>}
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
