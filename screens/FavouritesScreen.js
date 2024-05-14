import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FavouritesScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FavouritesScreen</Text>
      <Text>Yet to Get this done</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Click to go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavouritesScreen;
