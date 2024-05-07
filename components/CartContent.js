import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import AdjustQuantityControls from "./AdjustQuantityControls";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { removeItemFromCart } from "../features/cart/cartSlice";

const CONTAINER_HEIGHT = 100; //will make this dynamic later for responsiveness acrosss larger devices
const { width: screenWidth } = Dimensions.get("window");
const THRESHOLD_X = -screenWidth * 0.3;

const CartContent = ({ item }) => {
  const dispatch = useDispatch();
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const marginBottom = useSharedValue(20);
  const itemHeight = useSharedValue(CONTAINER_HEIGHT);
  const handleItemRemoval = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const pan = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX;
    })
    .onFinalize((event) => {
      const shouldDelete = THRESHOLD_X > translateX.value;
      if (shouldDelete) {
        translateX.value = withTiming(-screenWidth);
        itemHeight.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (finished) => {
          console.log(finished);
          if (finished) {
            console.log(item._id);
            runOnJS(handleItemRemoval)(item._id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    });
  const contentContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  const deleteContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(translateX.value < THRESHOLD_X ? 1 : 0),
    };
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginBottom: marginBottom.value,
      opacity: opacity.value,
    };
  });
  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.View style={[styles.deleteHighlight, deleteContainerStyle]}>
          <Text style={styles.deleteText}>Remove</Text>
        </Animated.View>
        <Animated.View style={[styles.contentContainer, contentContainerStyle]}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.mealImage }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
          </View>
          <View style={{ marginRight: 5 }}>
            <AdjustQuantityControls quantity={item.quantity} />
          </View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

//handle the look of this styling for much larger screens
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    // backgroundColor: "#E2E8F0",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  imageWrapper: {},
  image: {
    height: 100,
    width: 100,
    // overflow: "hidden",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
    // alignItems: "center",
    // justifyContent: "center",
  },
  itemText: {
    fontFamily: "Montserrat_400Regular",
    textTransform: "capitalize",
  },
  deleteHighlight: {
    height: CONTAINER_HEIGHT,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    alignItems: "flex-end",
    justifyContent: "center",
    // width: "90%",
    borderRadius: 20,
  },
  deleteText: {
    fontSize: 20,
    color: "white",
    marginRight: "10%",
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
  },
});

export default CartContent;
