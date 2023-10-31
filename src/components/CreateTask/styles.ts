import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: -32,
  },
  input: {
    height: 54,
    flex: 1,
    borderRadius: 6,
    backgroundColor: "#262626",
    marginRight: 4,
    padding: 16,
    fontSize: 16,
    lineHeight: (140 / 100) * 16,
    fontFamily: "Inter-Regular",
    color: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  button: {
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    width: 52,
    borderRadius: 6,
  },
});
