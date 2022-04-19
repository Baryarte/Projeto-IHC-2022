import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    fontFamily: "Roboto_100Thin",
    fontSize: 24,
    color: "#212f47",
    marginLeft: 12,
    marginBottom: 10,
  },

  pickerRow: {
    flexDirection: "row",
  },

  pickerContainer: {
    // flex: 1,
    justifyContent: "center",

    borderWidth: 3,
    borderRadius: 50,
    borderColor: "#7EA1C4",
    backgroundColor: "transparent",
  },

  colon: {
    fontFamily: "Roboto_400Regular",
    fontSize: 28,
    top: 14,
    marginHorizontal: 5,
  },

  picker: {
    width: 113,
    height: 65,
  },

  pickerItem: {
    fontSize: 17,
    fontFamily: "Roboto_400Regular",
  },

  pickerArrow: {
    color: "#F1F5F9",
  },
});

export default styles;
