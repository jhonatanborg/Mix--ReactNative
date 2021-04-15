import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/Theme";
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
  },
  headerTop: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#2D2C2C",
    borderRadius: 50,
    padding: 8,
    opacity: 50,
  },
  details: {
    paddingVertical: 25,
  },
  content: {
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "MontserratBold",
    flex: 4,
    fontSize: 15,
    color: COLORS.lightGray,
  },
  saleValue: {
    fontFamily: "MontserratBold",
    flex: 1,
    fontSize: 15,
  },
  description: {
    paddingHorizontal: 10,
    fontFamily: "MontserratRegular",
  },
});
export default styles;
