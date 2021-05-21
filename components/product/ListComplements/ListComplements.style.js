import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/Theme";
const styles = StyleSheet.create({
  headerList: {
    backgroundColor: COLORS.lightGray2,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    alignItems: "center",
  },
  headerItemTitle: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: COLORS.secondary,
  },
  headerItemSubtitle: {
    color: COLORS.lightGray,
    fontFamily: "MontserratRegular",
  },
  headerItemAction: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 50,
  },
  headerItemActionText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: "#7E7E7E",
  },
  listItem: {
    backgroundColor: "#F4F5F7",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  listItemText: {
    color: "#7E7E7E",
    fontFamily: FONTS.fontTheme,
    fontSize: 16,
  },
  listItemSubtitle: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: "#7E7E7E",
  },
  listItemActions: {
    paddingVertical: 2,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  listItemActionButton: {
    borderRadius: 50,
    padding: 5,
  },
  quantity: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    color: COLORS.lightGray4,
  },
});
export default styles;
