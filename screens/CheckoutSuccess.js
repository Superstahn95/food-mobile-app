import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../utils/constants";

const CheckoutSuccess = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CheckoutSuccess</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: colors.COLOR_PRIMARY,
          padding: 10,
          width: 100,
          borderRadius: 5,
        }}
      >
        <Text>Go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutSuccess;
