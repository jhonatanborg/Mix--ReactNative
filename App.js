import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigations/Navigator";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  // AsyncStorage.clear();

  let [customFonts] = useFonts({
    MontserratRegular: require("./assets/fonts/montserrat/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("./assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
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
