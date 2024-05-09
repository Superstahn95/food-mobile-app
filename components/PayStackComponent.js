import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Paystack } from "react-native-paystack-webview";
import useAuth from "../hooks/auth";
import { getCartTotal } from "../features/cart/cartSlice";
import axiosInstance from "../utils/axios";
import axios from "axios";

const PayStackComponent = ({
  deliveryAddress,
  phoneNumber,
  deliveryAddressNumber,
  pay,
  loading,
  setPay,
  setLoading,
  navigation,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = useSelector(getCartTotal);
  const { user } = useAuth();
  //map through cart items and return ordered items
  const orderedMeals = cartItems.map((item) => ({
    meal: item._id,
    quantity: item.quantity,
  }));
  const handleSendingOrder = async (reference) => {
    setLoading(true);
    const orderData = {
      deliveryInfo: {
        deliveryAddress,
        phoneNumber,
        deliveryAddressNumber,
      },
      orderedMeals,
      totalAmount,
      paymentReference: reference,
    };
    try {
      const { data } = await axiosInstance.post("order", orderData);
      setLoading(false);
      console.log("order has been sent to backend");
      navigation.navigate("CheckoutSuccess");
    } catch (error) {
      console.log(error);
      setLoading(false);
      //show error message
    }
  };
  return (
    <Paystack
      paystackKey="pk_test_1d093c2e1efe03deeb6a267b209ffa2baefb640f"
      amount={totalAmount}
      billingEmail={user.email}
      billingMobile={user.number}
      activityIndicatorColor="green"
      autoStart={pay}
      onSuccess={(response) => {
        console.log("payment has been sent");
        console.log();
        handleSendingOrder(response.transactionRef.reference);
      }}
      onCancel={(error) => {
        console.log(error);
      }}
    />
  );
};

export default PayStackComponent;
