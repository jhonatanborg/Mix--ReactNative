import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/Theme";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contain: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 30,
  },
  cover: {
    width: "100%",
    height: 286,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.50)",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  content: {
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  category: {
    paddingHorizontal: 10,
    fontFamily: "MontserratBold",
    fontSize: 18,
    color: COLORS.white,
  },
  title: {
    fontSize: 22,
    color: COLORS.black,
    fontFamily: "MontserratBold",
    width: "90%",
  },
  subtitle: {
    fontFamily: "MontserratRegular",
    color: COLORS.black,
  },
  status: {
    fontSize: 15,
    fontFamily: "MontserratRegular",
    color: COLORS.black,
  },
  section: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.cardLight,
    top: 90,
    marginHorizontal: 15,
    borderRadius: 8,
    elevation: 2,
  },
});
export default styles;
