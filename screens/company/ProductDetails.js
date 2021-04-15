import React from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { PRODUCT } from "../../services/api";
import {
  HeaderProduct,
  ListComplements,
  BottomBarSection,
} from "../../components/product";
import * as saleActions from "../../store/actions/saleActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      complements: [],
      loading: true,
      listanova: [],
      total: 0,
      totalComplements: 0,
    };
  }

  componentWillUnmount() {
    this.setState({ total: this.props.route.params.product.sale_value });
  }
  async componentDidMount() {
    const response = await PRODUCT.getComplements(
      this.props.route.params.product.object_id
    );
    this.setState({
      total: parseFloat(this.props.route.params.product.sale_value),
    });
    if (response.data.childs && response.data.childs.length > 0) {
      const complements = response.data.childs;
      complements.map((child) =>
        child.products.map((product) => {
          product.qtd = 0;
        })
      );
      this.setState({ complements });
    }
    this.setState({ loading: false });
  }
  AddQuantityItem = () => {
    const quantity = this.state.quantity + 1;
    this.setState({ quantity });
    const total = parseFloat(this.state.total) * quantity;
    this.setState({ total });
    console.log("total no estado", this.state.total);
    console.log("variavel funcao", total);
    console.log("quantidade", quantity);
    console.log("total de complementos somados", this.state.totalComplements);
  };
  DecraseQuantityItem = () => {
    const quantity = this.state.quantity > 1 ? this.state.quantity - 1 : 1;
    this.setState({
      quantity,
    });
    const total = quantity * parseFloat(this.state.total);
    this.setState({ total });
    console.log("QUANTIDADE:", quantity);
    console.log("TOTAL:", total);
  };
  AddMountComplements = (complement, category, limit) => {
    let listanova = this.state.listanova;
    let findedCategory = this.state.listanova[category];
    if (findedCategory) {
      const findexIndex = findedCategory.findIndex(
        (item) => item && item.id === complement.id
      );
      if (
        findexIndex >= 0 &&
        findedCategory.limite > 0 &&
        findedCategory.allQtd < findedCategory.limite
      ) {
        findedCategory[findexIndex].qtd++;
        findedCategory.allQtd++;
        const totalComplements = (this.state.totalComplements += Number(
          complement.sale_value
        ));
        this.setState({ totalComplements });
        this.setState({
          total:
            parseFloat(this.state.total) +
            parseFloat(complement.sale_value) * this.state.quantity,
        });
        console.log("SEGUNDO ADD");

        console.log("VALOR TOTAL DE COMPLEMENTO 2º ADD", totalComplements);
      } else if (findedCategory.allQtd < findedCategory.limite) {
        complement.qtd = 1;
        findedCategory.push(complement);
        findedCategory.allQtd++;
        const totalComplements =
          this.state.totalComplements + Number(complement.sale_value);
        console.log("TERCEIRO ADD");

        console.log("VALOR TOTAL DE COMPLEMENTO 3º ADD", totalComplements);
        this.setState({ totalComplements });
        this.setState({
          total:
            parseFloat(this.state.total) +
            Number(complement.sale_value) * this.state.quantity,
        });
        console.log("total:", this.state.total);
        console.log("total complementos:", totalComplements);
      }
    } else {
      complement.qtd = 1;
      findedCategory = [complement];
      findedCategory.limite = limit === 0 ? 9999 : limit;
      findedCategory.allQtd = 1;
      const totalComplements =
        this.state.totalComplements + Number(complement.sale_value);
      this.setState({ totalComplements });
      this.setState({
        total:
          parseFloat(this.state.total) +
          parseFloat(totalComplements) * this.state.quantity,
      });
      console.log("PRIMEIRO ADD");

      console.log("VALOR TOTAL DE COMPLEMENTO 1º ADD", totalComplements);
    }
    listanova[category] = findedCategory;
    this.setState({ listanova });
    const newListaNova = [];
    Object.keys(this.state.listanova).forEach((key) => {
      if (this.state.listanova[key].allQtd > 0) {
        newListaNova[key] = this.state.listanova[key];
      }
    });
    this.setState({ listanova: newListaNova });
  };
  addSale = () => {
    let objectChilds = [];
    if (this.state.complements.length > 0) {
      this.state.complements.forEach((category) => {
        console.log(category);
        if (this.state.listanova[category.name]) {
          this.state.listanova[category.name].forEach((complement) => {
            console.log("bem aqui");
            objectChilds.push({
              product_id: complement.id,
              product_qtd: complement.qtd,
              cashback_return: complement.cashback_return,
              product_name: complement.name,
              total: complement.sale_value,
              sale_type_id: 1,
              company_id: 1,
            });
          });
        }
      });
    }
    let sale = {
      product_id: this.props.route.params.product.id,
      product_qtd: this.state.quantity,
      product_name: this.props.route.params.product.name,
      img: this.props.route.params.product.img,
      total: this.state.total,
      cashback_return: this.props.route.params.product.cashback_return,
      sale_type_id: 1,
      company_id: 1,
      childs: objectChilds,
      comment: "oba",
    };
    console.log("produto pronto", sale);
    this.props.addItem({ type: "ADD_ITEM_SALE", sale });
  };

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    const product = this.props.route.params.product;

    const complements = this.state.complements;
    return (
      <View style={{ backgroundColor: "#F4F5F7", flex: 1 }}>
        <HeaderProduct
          product={product}
          categorie={this.props.route.params.categorie}
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView
          ref={(ref) => {
            this.setState({ ref });
          }}
        >
          <ListComplements
            onPress={(item, category, limit) =>
              this.AddMountComplements(item, category, limit)
            }
            complements={complements}
          />
        </ScrollView>
        <BottomBarSection
          total={this.state.total}
          quantity={this.state.quantity}
          AddQuantity={this.AddQuantityItem}
          DecraseQuantity={this.DecraseQuantityItem}
          onPress={this.addSale}
        />
        <View style={{ paddingBottom: 100 }}></View>
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
