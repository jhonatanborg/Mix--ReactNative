import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CardCompany.style";

const CardCompany = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contain}>
        <View style={styles.card}>
          <Image
            resizeMode="cover"
            style={
              props.allCompanies ? styles.listAllCommerceImage : styles.image
            }
            source={{ uri: props.company.image }}
          ></Image>
        </View>
        <View style={{ paddingHorizontal: 8, paddingVertical: 5 }}>
          <Text numberOfLines={3} style={styles.title}>
            {props.company.title}
          </Text>
          <Text style={styles.subtitle}>{props.company.categorie}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCompany;
