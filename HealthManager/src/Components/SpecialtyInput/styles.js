import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    fontFamily: "Roboto_100Thin",
    fontSize: 24,
    color: "#212f47",
    marginLeft: 25,
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

  bar: {
    //fontFamily: "Roboto_400Regular",
    fontSize: 28,
    top: 8,
  },

  monthAndDayPicker: {
    direction: "rtl",
    width: 300,
  },

  picker: {
    width: 102,
    // height: 111,
  },

  pickerItem: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },

  pickerArrow: {
    direction: "rtl",
    color: "#F1F5F9",
  },
  input: {
    height: 50,
    width: 320,
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#7EA1C4",
    backgroundColor: "#F1F5F9",
    margin: 12,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },
});

export default styles;
