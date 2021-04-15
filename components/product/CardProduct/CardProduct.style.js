import { COLORS, FONTS, SIZES } from "../../../constants/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tinyLogo: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: COLORS.lightGray,
    fontFamily: "MontserratRegular",
  },
  details: {
    fontSize: 14,
    fontFamily: "MontserratRegular",
  },
  card: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-around",
    marginVertical: 5,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    position: "relative",
  },
  box: {
    flex: 2,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "space-evenly",
  },
});
export default styles;
