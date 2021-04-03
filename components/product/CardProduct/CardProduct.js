import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { convertMoney } from "../../../utils";
import styles from "./CardProduct.style";

const CardProduct = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.card}>
      <View style={{ padding: 15 }}>
        <Image
          style={styles.tinyLogo}
          resizeMode="cover"
          source={{
            uri: "https://server.mixentregas.com.br" + props.product.img,
          }}
        ></Image>
      </View>
      <View style={styles.box}>
        <View>
          <Text numberOfLines={2} style={styles.title}>
            {props.product.name}
          </Text>
          <Text numberOfLines={2} style={styles.details}>
            {props.product.description}
          </Text>
        </View>
        <Text numberOfLines={2} ellipsizeMode="clip" style={styles.title}>
          {convertMoney(props.product.sale_value)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardProduct;
