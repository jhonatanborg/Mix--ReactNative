import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardLight,
    padding: 5,
  },
  contain: {
    marginHorizontal: 3,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 8,
  },
  title: {
    color: COLORS.black,
    marginTop: 8,
    paddingHorizontal: 15,
    fontFamily: "MulishSemiBold",
  },
});
