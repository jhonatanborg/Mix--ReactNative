import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Categorie.style";
import getEnvVars from "../../environment";
const { BASE_URL } = getEnvVars();
const categorie = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contain}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `${BASE_URL + props.categorie.img}` }}
          ></Image>
        </View>
        <Text style={styles.title}>{props.categorie.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default categorie;
