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
class Sale extends Component {
  async componentDidMount() {
    console.log(this.props.sale);
  }
  constructor(props) {
    super(props);
    this.state = {
      sale: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListProducts></ListProducts>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sale: state.sale,
  };
};
export default connect(mapStateToProps)(Sale);
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-evenly",
  },
});
