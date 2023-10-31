import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 8,
    flex: 1,
  },
  content: {
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  checkBox: {},
  description: {
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: (140 / 100) * 14,
    flex: 1,
    marginHorizontal: 8,
  },
});
