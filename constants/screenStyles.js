import { StyleSheet, Platform } from "react-native";

const screenStyles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
  },
  flatlistContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
  },
  contentText: {
    fontSize: 24,
    lineHeight: 28,
    alignSelf: "flex-start",
    letterSpacing: -0.2,
    paddingTop: 40,
    paddingBottom: 20,
    fontFamily: "MontserratRegular",
  },
  foreground: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 24,
    justifyContent: "flex-end",
  },
  background: {
    width: "100%",
    justifyContent: "flex-end",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    height: 24,
    width: 142,
  },
});

export default screenStyles;
