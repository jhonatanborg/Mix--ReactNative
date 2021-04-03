import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
  },
  contain: {
    marginHorizontal: 3,
    marginVertical: 15,
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 8,
  },
  listAllCommerceImage: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  title: {
    color: COLORS.black,
    marginTop: 10,
    fontSize: 18,
    fontFamily: "MulishSemiBold",
    maxWidth: 150,
  },
  subtitle: {
    color: COLORS.gray1,
    marginTop: 5,
    fontFamily: "MulishRegular",
  },
});
export default styles;
