import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import PayStackComponent from "../components/PayStackComponent";
import CheckoutHeader from "../components/CheckoutHeader";
import Loader from "../components/Loader";

const CheckoutScreen = ({ navigation }) => {
  const [pay, setPay] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddressNumber, setDeliveryAddressNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaystackView = () => {
    if (!deliveryAddress || !phoneNumber || !deliveryAddressNumber) {
      return alert("Input all field details");
    }
    setPay(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <CheckoutHeader navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Delivery Address</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => setDeliveryAddress(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Delivery Address Number</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => setDeliveryAddressNumber(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Receiver Phone Number</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <TouchableOpacity
          onPress={handlePaystackView}
          style={styles.formButton}
        >
          <Text style={styles.formButtonText}>Click to Pay</Text>
        </TouchableOpacity>
        {pay && (
          <PayStackComponent
            deliveryAddress={deliveryAddress}
            deliveryAddressNumber={deliveryAddressNumber}
            pay={pay}
            setPay={setPay}
            phoneNumber={phoneNumber}
            navigation={navigation}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </View>
      {loading && <Loader text={"Please wait while we process your order"} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  formContainer: {
    width: "90%", //handle when making responsive
    marginTop: 20,
  },
  formText: {
    fontFamily: "Montserrat_400Regular",
    marginBottom: 5,
  },
  formInput: {
    borderBottomWidth: 1,
    borderColor: "#e65100",
    height: 40,
    fontSize: 16,
  },
  formButton: {
    marginTop: 40,
    backgroundColor: "#e65100",
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    borderRadius: 5,
    width: "90%",
  },
  formButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CheckoutScreen;
