import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { COMPANY } from "../../services/api";
import { COLORS, FONTS, SIZES } from "../../constants/Theme";
import { connect } from "react-redux";

import { CardProduct } from "../../components/product/index";

import { HeaderCompany } from "../../components/company/index";
import getEnvVars from "../../environment";

const { BASE_URL } = getEnvVars();

class CompanyProfile extends React.Component {
  async componentDidMount() {
    console.log(this.props);
    const response = await COMPANY.getCompany(this.props.route.params.id);
    const products = response.data.prodCategories[0].products;
    const allprodutc = response.data.prodCategories;
    const company = {
      name: response.data.name,
      status: response.data.opened === "S" ? "Aberta" : "Fechada",
      logo: BASE_URL + response.data.logo,
      cover: BASE_URL + response.data.capa,
      delivery_max_time: response.data.deliveryFee.delivery_max_time,
      delivery_value: response.data.deliveryFee.value,
      categorie_name: response.data.primaryCategory.name,
      categorie_image: BASE_URL + response.data.primaryCategory.img,
      status: response.data.opened === "S" ? "Loja aberta" : "Loja fechada",
    };
    const categories = response.data.prodCategories.map((item) => ({
      name: item.name,
      selected: false,
    }));
    this.setState({ products, allprodutc, company, categories });
  }
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

  renderChipsMenu = (categories) => {
    return categories.map((item, index) => {
      return (
        <TouchableOpacity
          showsHorizontalScrollIndicator={false}
          onPress={() => this.scrollHandler(index)}
          key={index}
        >
          <View
            key={index}
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: COLORS.lightGray2,
              marginHorizontal: 15,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 25,
            }}
          >
            <Text
              style={{
                fontFamily: "MulishRegular",
                fontSize: 16,
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
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            const newCoordsPosts = this.state.postCords;
            newCoordsPosts[key] = layout.y + 300;
            const postCords = newCoordsPosts;
            this.setState({ postCords });
          }}
        >
          <Text style={styles.primaryText}>{categorie.name}</Text>
          {categorie.products.map((item, key) => {
            return (
              <CardProduct
                key={key}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetails", {
                    product: item,
                    categorie: categorie.name,
                  })
                }
                product={item}
              />
            );
          })}
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView
        stickyHeaderIndices={[1]}
        horizontal={false}
        style={styles.homeContainer}
        ref={(ref) => {
          this.setState({ ref });
        }}
      >
        <HeaderCompany
          onPress={() => this.props.navigation.goBack()}
          company={this.state.company || {}}
        ></HeaderCompany>
        <ScrollView
          horizontal
          scrollIndicatorInsets={false}
          style={{
            paddingVertical: 20,
            paddingTop: 40,
            marginTop: 50,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {this.renderChipsMenu(this.state.categories || [])}
        </ScrollView>
        <SafeAreaView>{this.renderItem(this.state.allprodutc)}</SafeAreaView>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return { categorieActive: state.categorieActive };
};
export default connect(mapStateToProps)(CompanyProfile);

const styles = StyleSheet.create({
  homeContainer: {
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
    fontSize: 20,
    fontFamily: "MulishBold",
    paddingHorizontal: 15,
    paddingVertical: 20,
    color: COLORS.black,
  },
});
