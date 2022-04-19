import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Login from './src/Screens/Login/';
import {Footer} from './src/Layout/Footer/footer.js';
import SignUp from './src/Screens/SignUp/';
import CadastrarMedico from './src/Screens/CadastrarMedico/';
import CadastrarRemedio from './src/Screens/CadastrarRemedio/';
import AcionaEmergencia from './src/Screens/AcionaEmergencia/';
import CadastrarConsulta from './src/Screens/CadastrarConsulta/';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/*<Title/>
      <LargeButton text='Cadastrar'/>
      <SmallButton text='Não'/>
      <Form/>
      <Login/>
      <SignUp/>
      <Footer/>
      <CadastrarMedico/>
      <CadastrarRemedio/>
      <CadastrarConsulta/>
      <ConfirmaEmergencia/>*/}
      <AcionaEmergencia/>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop:40,
  },
});
