import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/constants";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const CategoryHeader = ({ name, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    // alignItems: "center",
    width,
    height: "15%",
    padding: 10,
    backgroundColor: "#E2E8F0",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default CategoryHeader;
