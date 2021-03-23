import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

export default class LoadingScreen extends Component {
  async ComponentDidMount() {
    await Font.loadAsync({
      regular: require("../assets/fonts/monda/Monda-Regular.ttf"),
      bold: require("../assets/fonts/monda/Monda-Bold.ttf"),
    });
  }
  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
