import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
  },
  contain: {
    marginHorizontal: 3,
    marginVertical: 15,
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
    fontFamily: "MulishRegular",
  },
});
