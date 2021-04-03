import { StyleSheet } from "react-native";
import { screenStyles, COLORS, FONTS, SIZES } from "../../constants";
export default StyleSheet.create({
  ...screenStyles,
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  header: {
    paddingTop: 40,
    flexDirection: "row",
  },
  contain: {
    paddingVertical: 15,
  },
  card: {
    paddingVertical: 25,
    backgroundColor: COLORS.cardLight,
    paddingHorizontal: 10,
    marginTop: 8,
    flexDirection: "row",
    borderRadius: 8,
  },
  iconMarker: {
    paddingHorizontal: 16,
    flex: 1,
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 18,
    flex: 10,
    fontFamily: "MulishRegular",
    color: COLORS.lightGray,
  },
  title: {
    fontSize: 20,
    fontFamily: "MulishBold",
    color: COLORS.indigo,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "MulishRegular",
    color: COLORS.indigo,
  },
  logo: {
    height: 50,
    width: 40,
    resizeMode: "contain",
  },
  headline: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "MulishBold",
    lineHeight: 18,
    color: COLORS.headline,
    marginVertical: 5,
  },
});
