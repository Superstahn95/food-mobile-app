import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_300Light,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <WelcomeScreen />
    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome to react native</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
