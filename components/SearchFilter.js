import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchFilter = () => {
  return (
    <View style={styles.searchContainer}>
      {/* when i click this i want to go to the search screen */}
      <TouchableOpacity style={styles.textFieldContainer}>
        {/* <TextInput placeholder="Search for a meal" style={styles.textInput} /> */}

        <View style={styles.logoContainer}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <Text style={styles.searchText}>Search for meal</Text>
      </TouchableOpacity>
      {/* <Text>SearchFilter</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
  },
  textFieldContainer: {
    backgroundColor: "#E2E8F0",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    marginLeft: 10,
    // position: "absolute",
    // left: 4,
  },
  textInput: {
    backgroundColor: "red",
    flex: 1,
    height: "100%",
  },
  searchText: {
    color: "#808080",
    fontFamily: "Montserrat_400Regular",
    marginLeft: 20,
  },
});

export default SearchFilter;
