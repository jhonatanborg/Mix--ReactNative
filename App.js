import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/Navigator";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AsyncStorage } from "react-native";

const App = () => {
  let [customFonts] = useFonts({
    MulishRegular: require("./assets/fonts/Mulish/static/Mulish-Regular.ttf"),
    MulishBold: require("./assets/fonts/Mulish/static/Mulish-Bold.ttf"),
    MulishSemiBold: require("./assets/fonts/Mulish/static/Mulish-SemiBold.ttf"),
  });

  if (!customFonts) {
    return <ActivityIndicator />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer style={{ backgroundColor: "#FFFFFF" }}>
            <HomeStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
};
export default App;
