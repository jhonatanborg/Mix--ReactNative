import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { convertMoney } from "../utils/index";
import { COLORS, FONTS, SIZES } from "../constants/Theme";

export default class Products extends Component {
  render() {
    return (
      <TouchableOpacity city onPress={this.props.onPress} style={styles.card}>
        <View style={styles.box}>
          <View>
            <Text numberOfLines={2} style={styles.title}>
              {this.props.product.name}
            </Text>
            <Text numberOfLines={2} style={styles.details}>
              {this.props.product.description}
            </Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="clip" style={styles.title}>
            {convertMoney(this.props.product.sale_value)}
          </Text>
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://server.mixentregas.com.br" + this.props.product.img,
          }}
        ></Image>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  tinyLogo: {
    height: 130,
    width: 130,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.lightGray,
    fontFamily: FONTS.fontTheme,
  },
  details: {
    fontSize: 14,
  },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
    marginVertical: 5,
  },
  box: {
    flex: 3,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-evenly",
  },
});
