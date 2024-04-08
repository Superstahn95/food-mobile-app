import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
// import { categories } from "../assets/data";
import axiosInstance from "../utils/axios";

//fetch categories from backend here  when component loads
const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("category");
        setCategories(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <View>
          <Text>Unable to fetch categories. Retry!!!</Text>
        </View>
      ) : categories && categories.length === 0 ? (
        <View>
          <Text>There are no categories right now</Text>
        </View>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories?.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </ScrollView>
      )}

      {/* {error && <View><Text>Unable to fetch categories. Retry!!!</Text></View>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    // backgroundColor: "red",
  },
});

export default Categories;
