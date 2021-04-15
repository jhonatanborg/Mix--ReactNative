import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/Theme";
const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    height: 100,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    color: COLORS.white,
  },
  bottomBarActions: {
    paddingVertical: 2,
    flex: 2,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  quantity: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    color: COLORS.secondary,
  },
  buttomAction: {
    padding: 10,
  },
});
export default styles;
