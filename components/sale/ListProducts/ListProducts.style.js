import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
  },
  container: {
    flex: 1,
  },
  contain: {
    marginHorizontal: 3,
    marginVertical: 15,
    backgroundColor: COLORS.cardLight,
    borderRadius: 8,
    fontFamily: "MulishRegular",
  },
  listItem: {
    flexDirection: "row",
    padding: 10,
  },
  contentText: {
    flex: 1,
  },
  listItemAction: {},
  title: {
    fontSize: 45,
    fontFamily: "MulishBold",
    color: COLORS.gray1,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "MulishBold",
    color: COLORS.lightGray4,
  },
  itemSeparator: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
    height: 0.4,
  },
  listItemAvatar: {},
  itemAvatar: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 5,
  },
});
