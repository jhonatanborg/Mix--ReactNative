import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import AppIntro from "../screens/AppIntro";
// import Home from "../screens/home/Home";
import FilterCompanies from "../screens/filter/FilterCompanies";
import ProductDetails from "../screens/company/ProductDetails";
import Company from "../screens/company/Company";
import MainTabs from "./MainTabs";
import Sale from "../screens/sale/main";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="FilterCompanies" component={FilterCompanies} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Company" component={Company} />
      <Stack.Screen name="Sale" component={Sale} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
