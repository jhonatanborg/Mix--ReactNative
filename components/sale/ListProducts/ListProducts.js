import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from "react-native";
import styles from "./ListProducts.style";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ListProducts = (props) => {
  const ItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const Item = ({ item, index }) => (
    <View style={styles.listItem}>
      <View style={styles.listItemAvatar}>
        <Image
          style={styles.itemAvatar}
          resizeMode="cover"
          source={{
            uri: "https://server.mixentregas.com.br" + item.img,
          }}
        ></Image>
      </View>
      <View style={styles.contentText}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={styles.subtitle}>R$ {item.total}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.onPress(index);
        }}
        style={styles.listItemAction}
      >
        <AntDesign color="#ff5252" name="closecircleo" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {props.sale.map((item, index) => {
        console.log(item, index);

        return <Item key={index} item={item} index={index} />;
      })}
    </ScrollView>
  );
};

export default ListProducts;
