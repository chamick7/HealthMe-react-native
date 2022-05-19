import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomePage from "./pages/HomePage";
import { defaultFont, primaryColor } from "./utils/systemDesign";
import { setCustomText } from "react-native-global-props";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputPage from "./pages/InputPage";
import LoadingPage from "./pages/LoadingPage";
import { Provider } from "jotai";
import ResultPage from "./pages/ResultPage";

export default function App() {
  const [loaded] = useFonts({
    Kanit: require("./assets/fonts/Kanit.ttf"),
    KanitMedium: require("./assets/fonts/Kanit-Medium.ttf"),
    KanitSemiBold: require("./assets/fonts/Kanit-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  setCustomText({
    style: {
      fontFamily: defaultFont,
    },
  });

  const Stack = createNativeStackNavigator();

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            contentStyle: {
              backgroundColor: primaryColor,
            },
            headerShown: false,
            animation: "slide_from_right",
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Input" component={InputPage} />
          <Stack.Screen name="Loading" component={LoadingPage} />
          <Stack.Screen name="Result" component={ResultPage} />
        </Stack.Navigator>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appStyle: {
    flex: 1,
    backgroundColor: primaryColor,
    fontFamily: "Kanit",
  },
});
