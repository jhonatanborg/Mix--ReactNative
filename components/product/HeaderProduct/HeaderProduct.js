import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Entypo";
import styles from "./HeaderProduct.style";

const HeaderProduct = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
      }}
    >
      <View style={{ width: "10%" }}>
        <TouchableOpacity onPress={props.onPress}>
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {props.categorie}
          </Text>
        </View>
      </View>
      <View style={{ width: "10%" }}>
        <Icon name="heart" color="#f9dd7a" size={30} />
      </View>
      <Image
        style={styles.image}
        resizeMode={"cover"}
        source={{
          uri: "https://server.mixentregas.com.br" + props.product.img,
        }}
      />
    </View>
  );
};

export default HeaderProduct;
