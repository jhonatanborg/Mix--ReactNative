import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { convertMoney } from "../utils/index";

export default class Products extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.tinyLogo}
            resizeMode="cover"
            source={{
              uri: "https://server.mixentregas.com.br" + this.props.product.img,
            }}
          ></Image>
        </View>
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
      </TouchableOpacity>
    );
  }
}
