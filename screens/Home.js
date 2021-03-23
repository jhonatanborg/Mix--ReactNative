import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Api from "../services/api";
import { COLORS, FONTS, SIZES } from "../constants/Theme";

import Product from "../components/Products";
import CompanyDetails from "../components/company/Profile";

export default class Home extends React.Component {
  state = {
    products: [],
    allprodutc: [],
    company: {},
    categories: [],
    scrollToIndex: 0,
    ref: null,
    postCords: [],
  };
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "90%",
          marginVertical: 10,
          backgroundColor: COLORS.lightGray4,
        }}
      />
    );
  };
  scrollHandler = (index) => {
    if (this.state.postCords.length > this.state.scrollToIndex) {
      this.state.ref.scrollTo({
        x: 0,
        y: this.state.postCords[index],
        animated: true,
      });
    }
  };
  async componentDidMount() {
    try {
      const response = await Api.getDataCompany();
      const products = response.data.prodCategories[0].products;
      const allprodutc = response.data.prodCategories;
      const company = {
        name: response.data.name,
        status: response.data.opened === "S" ? "Aberta" : "Fechada",
        logo: response.data.logo,
        cover: response.data.capa,
        delivery_max_time: response.data.deliveryFee.delivery_max_time,
        delivery_value: response.data.deliveryFee.value,
      };
      const categories = response.data.prodCategories.map((item) => ({
        name: item.name,
        selected: false,
      }));
      this.setState({ products, allprodutc, company, categories });
    } catch (error) {
      console.log("ERRO NO MOUNT: ", error.message);
    }
  }

  renderList = (product, categorie) => {
    return (
      <Product
        onPress={() =>
          this.props.navigation.navigate("Test", {
            product: product,
            categorie: categorie,
          })
        }
        product={product}
      />
    );
  };
  renderChipsMenu = (categories) => {
    return categories.map((item, index) => {
      return (
        <TouchableOpacity onPress={() => this.scrollHandler(index)} key={index}>
          <View
            key={index}
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: item.selected
                ? COLORS.lightGray
                : COLORS.lightGray3,
              marginHorizontal: 15,
              borderRadius: 25,
              paddingVertical: 6,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: item.selected ? COLORS.lightGray2 : COLORS.lightGray1,
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  renderItem = (value) => {
    return value.map((categorie, key) => {
      return (
        <View
          key={key}
          style={styles.item}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            const newCoordsPosts = this.state.postCords;
            newCoordsPosts[key] = layout.y;
            const postCords = newCoordsPosts;
            this.setState({ postCords });
          }}
        >
          <Text style={styles.primaryText}>{categorie.name}</Text>
          {categorie.products.map((item, key) => {
            return (
              <View key={key}>
                <Product
                  onPress={() =>
                    this.props.navigation.navigate("Detail", {
                      product: item,
                      categorie: categorie.name,
                    })
                  }
                  product={item}
                />
              </View>
            );
          })}
        </View>
      );
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.homerContainer}>
        <View>
          <CompanyDetails company={this.state.company}></CompanyDetails>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 130 }}
          >
            {this.renderChipsMenu(this.state.categories || [])}
          </ScrollView>
        </View>
        <ScrollView
          horizontal={false}
          ref={(ref) => {
            this.setState({ ref });
          }}
        >
          {this.renderItem(this.state.allprodutc)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  homerContainer: {
    flex: 1,
    color: COLORS.lightGray4,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  productsList: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  primaryText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
