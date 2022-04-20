import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { HomeButton } from "./src/Components/HomeButton"
import { StyleSheet, Text, View } from "react-native";
import randomImg from "./assets/download.jpg"


import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <View style={styles.compButtons}>
          <HomeButton text={"Remedios"} image={randomImg}/>
          <HomeButton text={"Médicos"} image={randomImg}/>
          <HomeButton text={"Consultas"} image={randomImg}/>
          <HomeButton text={"Saúde"} image={randomImg}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  compButtons:{
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    width:'100%',
    
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
