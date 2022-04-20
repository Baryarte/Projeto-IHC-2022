import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  form: {
    paddingHorizontal: 20,
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
    top: 20,
    color: "#212F47",
    fontSize: 28,
    fontWeight: "normal",
    marginLeft: 10,
  },
  formLabel: {
    color: "#212F47",
    fontSize: 24,
    paddingLeft: 40,
    fontWeight: "100",
    paddingTop: 20,
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
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 30,
  },
});

export default styles;
