import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>EditProfileScreen</Text>
      <Text>Yet to Get this done</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Click to go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
