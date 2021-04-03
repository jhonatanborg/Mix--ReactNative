import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./FilterCompany.styles";
import { AntDesign } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Entypo";

import CardCompany from "../../components/company/CardCompany/CardCompany";
import { connect } from "react-redux";
class Home extends Component {
  async componentDidMount() {
    const companiesFilter = this.props.companies.filter(
      (company) => company.categorie === this.props.categorieActive.name
    );
    console.log(this.props.categorieActive);
    this.setState({ companiesFilter });
  }
  constructor(props) {
    super(props);
    this.state = {
      companiesFilter: [],
    };
  }
  filterCategorie = (categorie) => {
    return {
      type: "SET_CATEGORIE_FILTER",
      categorie,
    };
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contain}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }}
          >
            <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <AntDesign name="leftcircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ width: "80%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{ width: 30, height: 30, alignSelf: "center" }}
                  resizeMode="contain"
                  source={this.props.categorieActive.img}
                ></Image>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {this.props.categorieActive.name}
                </Text>
              </View>
            </View>
            <View style={{ width: "10%" }}>
              <Icon name="heart" color="#f9dd7a" size={30} />
            </View>
          </View>
          <SafeAreaView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={this.state.companiesFilter}
              horizontal={false}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index, separators }) => (
                <CardCompany
                  onPress={() =>
                    this.props.navigation.navigate("Company", {
                      id: item.id,
                    })
                  }
                  company={item}
                  allCompanies={true}
                ></CardCompany>
              )}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return { companies: state.companies, categorieActive: state.categorieActive };
};
export default connect(mapStateToProps)(Home);
