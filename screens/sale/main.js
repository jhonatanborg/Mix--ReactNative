import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ListProducts } from "../../components/sale";
import { connect } from "react-redux";
import * as saleActions from "../../store/actions/saleActions";
import { bindActionCreators } from "redux";

class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sale: [],
    };
  }
  removeItem = (index) => {
    this.props.removeItem({ type: "REMOVE_ITEM_SALE", index });
  };
  render() {
    return (
      <View style={styles.container}>
        <ListProducts
          onPress={(index) => this.removeItem(index)}
          sale={this.props.sale}
        ></ListProducts>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sale);
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-evenly",
  },
});
