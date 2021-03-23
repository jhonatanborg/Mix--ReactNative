import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants/Theme";

export default class CompanyDetails extends Component {
  render() {
    const delivery = {
      time: "15 - 20 mins",
      value: "R$ 0.00",
      availate: "Bom serviço",
    };
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.cover}
          source={{
            uri: "https://server.mixentregas.com.br" + this.props.company.cover,
          }}
          blurRadius={1}
        >
          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingHorizontal: 15,
                alignItems: "center",
              }}
            >
              <Image
                style={styles.logo}
                source={{
                  uri:
                    "https://server.mixentregas.com.br" +
                    this.props.company.logo,
                }}
              ></Image>
              <View>
                <Text numberOfLines={3} style={styles.title}>
                  {this.props.company.name}
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.subtitle}>Ver mais informações</Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="md-time-sharp"
              size={24}
              color={COLORS.lightGray}
              style={{ marginRight: 8 }}
              adjustsFontSizeToFit
            />
            <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
              Entrega em: {this.props.company.delivery_max_time} mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <MaterialIcons
              name="sports-motorsports"
              size={24}
              color={COLORS.lightGray}
              style={{ marginRight: 8 }}
              adjustsFontSizeToFit
            />
            <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
              Taxa de entrega: {this.props.company.delivery_value}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name={
                this.props.company.status === "Aberta"
                  ? "lock-open"
                  : "md-lock-closed"
              }
              size={24}
              color={
                this.props.company.status === "Aberta"
                  ? COLORS.lightGreen
                  : COLORS.red
              }
              style={{ marginRight: 8 }}
              adjustsFontSizeToFit
            />
            <Text
              style={{
                ...FONTS.body3,
                fontWeight: "bold",
                color:
                  this.props.company.status === "Aberta"
                    ? COLORS.lightGreen
                    : COLORS.red,
              }}
            >
              Loja {this.props.company.status}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cover: {
    width: "100%",
    height: 200,
    overlayColor: "#000",
    tintColor: "#000",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    width: "100%",
  },
  subtitle: {
    fontFamily: FONTS.fontTheme,
    color: "#fff",
  },
  section: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "stretch",
    backgroundColor: "rgba( 0, 0, 0, 0.6)",
  },
  card: {
    height: 150,
    top: 150,
    backgroundColor: "#fff",
    position: "absolute",
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 3,
    borderRadius: 5,
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
});
