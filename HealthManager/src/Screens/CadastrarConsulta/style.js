import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  boxTitle: {
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
  },
  textTitle: {
    fontFamily: "Roboto_400Regular",
    color: "#212F47",
    fontSize: 28,
    fontWeight: "normal",
  },
  dadosremedio: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  formLabel: {
    fontFamily: "Roboto_100Thin",
    color: "#212F47",
    fontSize: 24,
    paddingLeft: 60,
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
