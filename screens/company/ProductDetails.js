import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Button,
} from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import { convertMoney } from "../../utils/index";
import { PRODUCT } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/Theme";
import { HeaderProduct, ListComplements } from "../../components/product";
import * as saleActions from "../../store/actions/saleActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const win = Dimensions.get("window");

const ratio = win.width / 541;

class ProductDetails extends React.Component {
  state = {
    quantity: 1,
    complements: [],
    loading: true,
    fontsLoaded: false,
  };
  addQuantity = (quantity) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  subtractQuantity = (quantity) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  addSale = () => {
    const product = this.props.route.params.product;
    this.props.addItem({ type: "ADD_ITEM_SALE", product });
  };
  async componentDidMount() {
    const response = await PRODUCT.getComplements(
      this.props.route.params.product.object_id
    );
    const complements = response.data;
    this.setState({ complements });
    this.setState({ loading: false });
  }
  renderDescription = (product) => {
    if (product.description) {
      return (
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              color: "#a4a4a9",
              fontWeight: "bold",
              fontSize: 16,
              marginHorizontal: 20,
              textAlign: "justify",
              fontFamily: FONTS.fontTheme,
            }}
          >
            {product.description}
          </Text>
        </View>
      );
    }
  };
  renderBottomButton = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 20,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          <TouchableOpacity onPress={this.addQuantity}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              +
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingHorizontal: 18,
            }}
          >
            {this.state.quantity}
          </Text>

          <TouchableOpacity onPress={this.subtractQuantity}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.addSale} style={styles.button}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>Adicionar 1</Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderItem = (complements) =>
    complements.map((element) => {
      return (
        <View>
          <View style={styles.list}>
            <Text style={styles.listTitle}>{element.name}</Text>
          </View>
          <FlatList
            data={element.products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      );
    });
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    const product = this.props.route.params.product;

    const complements = this.state.complements.childs;
    return (
      <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <HeaderProduct
          product={product}
          categorie={this.props.route.params.categorie}
          onPress={() => this.props.navigation.goBack()}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            paddingVertical: product.description ? 20 : 20,
          }}
        >
          <View>
            <Text
              numberOfLines={3}
              ellipsizeMode="clip"
              style={{
                fontSize: 22,
                width: 250,
                fontFamily: "MulishRegular",
              }}
            >
              {product.name}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            {convertMoney(product.sale_value)}
          </Text>
        </View>
        {this.renderDescription(product)}

        <View
          horizontal={false}
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 10,
            flex: 1,
          }}
        >
          {this.renderItem(complements)}
        </View>
        <View
          style={{
            height: 80,
            marginBottom: 0,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 2,
            shadowRadius: 2,
          }}
        >
          {this.renderBottomButton()}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sale: state.sale,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(saleActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5fa",
  },
  image: {
    width: win.width,
    height: 302 * ratio,
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
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#424242",
  },
  list: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listComplements: {
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    paddingHorizontal: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
