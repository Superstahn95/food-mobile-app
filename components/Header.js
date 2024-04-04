import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/constants";

const Header = ({ text }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hi Joel</Text>
      <TouchableOpacity style={styles.iconWrapper}>
        <AntDesign name="user" size={30} color={colors.COLOR_PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

//better handle styles to look responsive
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  headerText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: "#808080",
    borderStyle: "solid",
    borderRadius: "50%",
    padding: 2,
  },
});

export default Header;
