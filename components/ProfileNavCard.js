import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/constants";

const ProfileNavCard = ({ navigation, route, text }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
      <AntDesign name="arrowright" size={24} color={colors.COLOR_PRIMARY} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    width: "100%", // might change this later after considering the view on larger device
    backgroundColor: "#E2E8F0",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    textTransform: "capitalize",
  },
});

export default ProfileNavCard;
