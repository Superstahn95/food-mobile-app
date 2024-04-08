import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/constants";
import axiosInstance from "../utils/axios";
import Loader from "../components/Loader";
import MealView from "../components/MealView";

const { height, width } = Dimensions.get("window");
const MealScreen = ({ route, navigation }) => {
  //figure out if there is a better way to handle the loader
  const [quantity, setQuantity] = useState(1);
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mealId } = route.params;
  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(`meal/${mealId}`);
        setMeal(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchMeal();
  }, [mealId]);
  // have a function to try refetching meal when there is an error
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader text={"Getting meal"} />
      ) : (
        meal && (
          <MealView
            meal={meal}
            quantity={quantity}
            setQuantity={setQuantity}
            navigation={navigation}
          />
        )
      )}
      {/* style error */}
      {error && (
        <View>
          <Text>Something went wrong. Click to retry</Text>
          {/* should have a button here to try refetching data */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealScreen;
