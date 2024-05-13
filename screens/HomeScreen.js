import { SafeAreaView } from "react-native";
import useAuth from "../hooks/auth";
import Header from "../components/Header";
import Intro from "../components/Intro";
import SearchFilter from "../components/SearchFilter";
import Categories from "../components/Categories";
import Meals from "../components/Meals";
import CartIndicator from "../components/CartIndicator";

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header component */}
      <Header text={user?.firstName} navigation={navigation} />
      {/* intro component */}
      <Intro />
      {/* Search filter */}
      <SearchFilter />
      {/* Categories component */}
      <Categories />
      {/* Meals component */}
      <Meals />
      <CartIndicator />
    </SafeAreaView>
  );
};

export default HomeScreen;
