import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  title: {
    marginTop: 16,
    color: "#808080",
    fontWeight: "bold",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: (140 / 100) * 14,
  },
  description: {
    color: "#808080",
    fontSize: 14,
    lineHeight: (140 / 100) * 14,
  },
});
