import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  form: {
    paddingHorizontal: 40,
  },

  dateInputContainer: {
    alignSelf: "center",
    marginTop: 56,
  },

  hourInputContainer: {
    marginTop: 17,
    marginBottom: 30,
    marginLeft: 10,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginLeft: 15,
  },

  dayButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#7ea1c4",
    margin: 12,
    marginBottom: 30,
  },

  dayButtonSelected: {
    backgroundColor: "#3A506B",
  },

  daysText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    color: "#000",
  },

  daysTextSelected: {
    color: "#f1f5f9",
  },

  boxTitle: {
    // justifyContent: "center",
    flexDirection: "row",
    paddingTop: 46,
    // paddingLeft: 40,
    // paddingRight: 40,
    paddingBottom: 30,
  },

  textTitle: {
    fontFamily: "Roboto_400Regular",
    color: "#212F47",
    fontSize: 28,
    fontWeight: "normal",
    top: 20,
    marginLeft: 10,
  },
  dadosremedio: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  formLabel: {
    fontFamily: "Roboto_100Thin",
    color: "#212F47",
    fontSize: 24,
    paddingLeft: 24,
    fontWeight: "100",
    paddingTop: 20,
  },

  mandatory: {
    color: "black",
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

  obsContainer: {
    marginTop: 22,
  },

  obs: {
    height: 200,
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
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
});

export default style;
