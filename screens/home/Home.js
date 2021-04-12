import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./HomeScreen.styles";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import Categorie from "../../components/categorie/Categorie";
import { CardCompany } from "../../components/company/";
import { COMPANY } from "../../services/api";
import { connect } from "react-redux";
import getEnvVars from "../../environment";
const { BASE_URL } = getEnvVars();
class Home extends Component {
  async componentDidMount() {
    const response = await COMPANY.getCompanies();
    const responsecategories = await COMPANY.getCategories();
    const categories = responsecategories.data;
    const companies = response.data.map(function (item) {
      return {
        id: item.id,
        title: item.name,
        categorie: item.primaryCategory.name,
        image: BASE_URL + item.logo,
      };
    });
    this.props.dispatch({ type: "SET_COMPANIES", companies });
    this.setState({ companies, categories });
  }
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      categories: [],
    };
  }
  filterCategorie = (categorie) => {
    this.props.navigation.navigate("FilterCompanies");
    return {
      type: "SET_CATEGORIE_FILTER",
      categorie,
    };
  };
  render() {
    return (
      <ScrollView horizontal={false} style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo/mix.png")}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Mix</Text>
            <Text style={styles.subtitle}>Entregas</Text>
          </View>
        </View>
        <View style={styles.contain}>
          <View>
            <Text style={styles.headline}>Meu endereço:</Text>
          </View>
          <View style={styles.card}>
            <Text numberOfLines={2} style={styles.cardTitle}>
              R. dos Papiros - St. Res. Sul, Sinop - MT, 78550-472
            </Text>
            <View style={styles.iconMarker}>
              <Feather name="map-pin" size={24} color={COLORS.lightGray4} />
            </View>
          </View>
        </View>
        <View style={styles.contain}>
          <View>
            <Text style={styles.headline}>Categorias</Text>
          </View>
          <SafeAreaView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.categories}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index, separators }) => (
                <Categorie
                  key={index.toString()}
                  onPress={() =>
                    this.props.dispatch(this.filterCategorie(item))
                  }
                  categorie={item}
                ></Categorie>
              )}
            />
          </SafeAreaView>
        </View>
        <View style={styles.contain}>
          <View>
            <Text style={styles.headline}>Populares</Text>
          </View>
          <SafeAreaView horizontal={false}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.trends}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index, separators }) => (
                <CardCompany
                  onPress={(item) =>
                    this.props.navigation.navigate("Company", {
                      object_id: item.object_id,
                    })
                  }
                  key={index.toString()}
                  company={item}
                  allCompanies={false}
                ></CardCompany>
              )}
            />
          </SafeAreaView>
        </View>
        <View style={styles.contain}>
          <View>
            <Text style={styles.headline}>Todas as lojas</Text>
          </View>
          <SafeAreaView horizontal={false}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={this.props.companies}
              horizontal={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index, separators }) => (
                <CardCompany
                  onPress={() =>
                    this.props.navigation.navigate("Company", {
                      id: item.id,
                    })
                  }
                  key={index.toString()}
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
  return {
    categorie: state.categorie,
    companies: state.companies,
  };
};
export default connect(mapStateToProps)(Home);