import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/constants";

const Intro = () => {
  return (
    <View style={styles.introContainer}>
      <Text style={[styles.intro, styles.introHeader]}>Let's eat</Text>
      <Text style={[styles.intro, styles.introSubtext]}>Nutritious Food</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    padding: 10,
  },
  intro: {
    fontSize: 30,
  },
  introHeader: {
    fontFamily: "Montserrat_700Bold",
    color: colors.COLOR_PRIMARY,
  },
  introSubtext: {
    fontFamily: "Montserrat_400Regular",
  },
});

export default Intro;
