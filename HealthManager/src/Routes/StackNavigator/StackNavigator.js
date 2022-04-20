import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarConsulta from "../../Screens/CadastrarConsulta";
import CadastrarMedico from "../../Screens/CadastrarMedico";
import CadastrarRemedio from "../../Screens/CadastrarRemedio";
import AcionaEmergencia from "../../Screens/AcionaEmergencia";
import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="CadastrarRemedio"
      screenOptions={{
        // headerShadowVisible: false,
        headerShown: false,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="CadastrarConsulta"
        component={CadastrarConsulta}
        options={{ title: "Cadastro de Consulta" }}
      />
      <Stack.Screen
        name="CadastrarMedico"
        component={CadastrarMedico}
        options={{ title: "Cadastro de Medico" }}
      />
      <Stack.Screen
        name="CadastrarRemedio"
        component={CadastrarRemedio}
        options={{ title: "Cadastro de Remedio" }}
      />
      <Stack.Screen
        name="AcionaEmergencia"
        component={AcionaEmergencia}
        options={{ title: "Aciona Emergencia" }}
      />
    </Stack.Navigator>
  );
}
