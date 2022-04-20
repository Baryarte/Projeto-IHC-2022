import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: 'absolute',
    bottom:20,
    right:20,
  },

  button: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA708",
    borderRadius: 50,
    elevation: 4,
  },

  label: {
    fontSize: 10,
    fontFamily: "Roboto_400Regular",
    color: "#E72727",
    marginTop: 5,
  },

  icon: {
    marginTop: 3,
    width:42,
    height:42,
  },
});

export default styles;