import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CategoryHeader from "../components/CategoryHeader";
import axiosInstance from "../utils/axios";
import MealCard from "../components/MealCard";

const CategoryScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(false);
  //handle showing error messages on the UI
  const [errorMsg, setErrorMsg] = useState("");
  const { categoryId, headerText } = route.params;
  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(`category/${categoryId}`);
        setCategory(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchCategory();
  }, []);
  return (
    <View style={styles.container}>
      <CategoryHeader navigation={navigation} name={headerText} />
      {/* conditionally render components depending on the result of backend call */}
      {loading ? (
        <View style={styles.utilityContainer}>
          {/* add a better loader component */}
          <Text style={styles.utitilyText}>Fetching meals</Text>
          <Text style={styles.utitilyText}>Please wait..</Text>
        </View>
      ) : error ? (
        <View style={styles.utilityContainer}>
          {" "}
          <Text style={styles.utitilyText}>
            Something went wrong. Click to retry
          </Text>{" "}
        </View>
      ) : category && category.meals.length === 0 ? (
        <View style={styles.utilityContainer}>
          <Text style={styles.utitilyText}>
            There are currently no available meals for this category
          </Text>
        </View>
      ) : (
        // check this
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item._id}
          data={category?.meals}
          renderItem={({ index, item }) => (
            <MealCard meal={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  utilityContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  utitilyText: {
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
    fontSize: 20,
  },
});

export default CategoryScreen;
