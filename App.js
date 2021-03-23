import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/Navigator";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { COLORS, FONTS, SIZES } from "./constants/Theme";

const App = () => {
  let [customFonts] = useFonts({
    Monda: require("./assets/fonts/monda/Monda-Bold.ttf"),
  });
  if (!customFonts) {
    return <ActivityIndicator />;
  } else {
    return (
      <NavigationContainer style={{ backgroundColor: COLORS.lightGray2 }}>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  }
};
export default App;
