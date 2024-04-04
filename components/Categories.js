import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../assets/data";

//fetch categories from backend here  when component loads
const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
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
