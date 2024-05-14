import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/auth";
import { colors } from "../utils/constants";
import ProfileNavCard from "../components/ProfileNavCard";
import ProfileHeader from "../components/ProfileHeader";
import { Ionicons } from "@expo/vector-icons";

const profileNavigations = [
  { property: "orders", route: "Orders" },
  { property: "favourites", route: "Favourites" },
  { property: "Edit profile", route: "EditProfile" },
];

const ProfileScreen = ({ navigation }) => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ProfileHeader />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{user.firstName[0]}</Text>
          </View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.detailsText}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={styles.emailText}>{user.email}</Text>
            <Text style={styles.detailsText}>{user.number}</Text>
          </View>

          <View style={styles.navigationContainer}>
            {profileNavigations.map((nav) => (
              <ProfileNavCard
                navigation={navigation}
                route={nav.route}
                text={nav.property}
                key={nav.property}
              />
            ))}
          </View>

          {/* logout container */}
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutContainer}
          >
            <Text style={styles.logoutText}>log out</Text>
            <Ionicons name="exit" size={24} color={colors.COLOR_PRIMARY} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.COLOR_PRIMARY,
    marginVertical: 20,
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: "Montserrat_700Bold",
    textTransform: "uppercase",
  },
  bioDataContainer: {
    // backgroundColor: "red",
  },
  detailsText: {
    textAlign: "center",
    fontSize: 14,
    textTransform: "capitalize",
    fontFamily: "Montserrat_700Bold",
    marginBottom: 5,
  },
  emailText: {
    textAlign: "center",
    fontSize: 14,
    // textTransform: "capitalize",
    fontFamily: "Montserrat_700Bold",
    marginBottom: 5,
  },
  navigationContainer: {
    width: "90%",
  },
  logoutContainer: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    width: "90%", // might change this later after considering the view on larger device
    backgroundColor: "#E2E8F0",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    textTransform: "capitalize",
  },
});

export default ProfileScreen;
