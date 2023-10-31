import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    lineHeight: (140 / 100) * 14,
    fontWeight: "bold",
  },
  numberView: {
    backgroundColor: "#333333",
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  numberText: {
    color: "#D9D9D9",
    fontSize: 12,
    lineHeight: (140 / 100) * 12,
    fontWeight: "bold",
  },
});
