import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Entypo";
import styles from "./HeaderProduct.style";
import { convertMoney } from "../../../utils";

const HeaderProduct = (props) => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        resizeMode={"cover"}
        source={{
          uri: "https://server.mixentregas.com.br" + props.product.img,
        }}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
            <AntDesign name="left" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={{ width: "80%", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            ></View>
          </View>
          <View>
            <Icon name="heart" color="#f9dd7a" size={30} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {props.product.name}
          </Text>
          <Text style={styles.saleValue}>
            {convertMoney(props.product.sale_value)}
          </Text>
        </View>
        <View>
          <Text style={styles.description}>{props.product.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProduct;
