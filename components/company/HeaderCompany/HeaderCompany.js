import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styles from "./HeaderCompany.style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Entypo";

const HeaderCompany = (props) => {
  return (
    <ImageBackground
      style={styles.cover}
      source={{
        uri: props.company.cover,
      }}
      blurRadius={1}
    >
      <View style={styles.overlay}>
        <View style={styles.contain}>
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={props.onPress}>
              <AntDesign name="leftcircleo" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <Text style={styles.category}>{props.company.categorie_name}</Text>
          </View>
          <View style={{ width: "10%" }}>
            <Icon name="heart" color="#fff" size={30} />
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.section}>
            <Image
              style={styles.logo}
              source={{
                uri: props.company.logo,
              }}
            ></Image>
            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.title}>
                {props.company.name}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.subtitle}>Ver mais informações</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#1E1B26"
                />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.status}>
                {props.company.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HeaderCompany;
