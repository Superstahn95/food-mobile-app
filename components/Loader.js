import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Loader = ({ text }) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#e65100" />
      <Text style={styles.loaderText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    width,
    height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 0.8,
  },
  loaderText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
});

export default Loader;
