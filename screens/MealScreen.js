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
        console.log("data fetched");
        setMeal(data.data);
        console.log(meal);
        setLoading(false);
      } catch (error) {
        console.log("something went wrong");
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchMeal();
  }, [mealId]);
  //   split this into subcomponents
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader text={"Getting meal"} />
      ) : (
        meal && (
          <>
            <View style={styles.mealImageContainer}>
              <Image
                source={{ uri: meal.mealImage }}
                style={styles.mealImage}
              />
              <View style={styles.overlay} />
              <View style={styles.controls}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back-circle"
                    size={40}
                    color={colors.COLOR_PRIMARY}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign
                    name="heart"
                    size={30}
                    color={colors.COLOR_PRIMARY}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              {/* name of the meal */}
              <Text style={styles.mealName}>{meal.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text style={styles.mealPrice}>{meal.price}</Text>
                {/* cart controls */}
                <View style={styles.cartControls}>
                  <TouchableOpacity style={styles.addAndMinusButton}>
                    <AntDesign name="minus" size={24} color="white" />
                  </TouchableOpacity>
                  <View style={styles.quantity}>
                    <Text style={{ fontSize: 20 }}>{quantity}</Text>
                  </View>
                  <TouchableOpacity style={styles.addAndMinusButton}>
                    <AntDesign name="plus" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{meal.description}</Text>
              </View>

              {/* get meals that belongs to the same category */}
            </View>
          </>
        )
      )}
      {/* style error */}
      {error && (
        <View>
          <Text>Something went wrong. Click to retry</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealImageContainer: {
    width,
    height: "50%",
    position: "relative",
  },
  mealImage: {
    height: "100%",
    width: "100%",
    // objectFit: "cover",
  },
  controls: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  detailsContainer: {
    marginTop: 5,
    padding: 10,
  },
  mealName: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 25,
  },
  mealPrice: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
  quantity: {
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // paddingHorizontal: 10,
    padding: 10,
  },
  addAndMinusButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    padding: 5,
  },
  descriptionContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  descriptionText: {
    fontFamily: "Montserrat_400Regular",
  },
});

export default MealScreen;
