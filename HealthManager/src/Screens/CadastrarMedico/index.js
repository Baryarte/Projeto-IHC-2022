import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Telefone } from "../../Components/Telefone/telefone";
import { ReturnArrow } from "../../Components/ReturnArrow/";
import { LargeButton } from "../../Components/Button";
import SpecialtyInput from "../../Components/SpecialtyInput";

export default function CadastrarMedico({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [ddd, setDdd] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [specialty, setSpecialty] = useState(null);
  const [address, setAddress] = useState(null);
  const [observation, setObservation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function nameCheck() {
    if (!name) {
      setErrorMessage("Campo Obrigatório*");
      return 1;
    } else {
      setErrorMessage(null);
      return 0;
    }
  }

  const handleTelephone = (text) => {
    setTelephone(text);
  };

  const handleSubmit = () => {
    nameCheck();
    if (!name || telephone == "error") {
      console.log("errooooo");
    } else {
      foi;
    }
  };

  useEffect(() => {
    console.log("useEffect cadastro medico");
    console.log(specialty);
    console.log(telephone);
  }, [specialty, telephone]);

  return (
    <ScrollView style={style.container}>
      {/* <Pressable on Press={Keyboard.dismiss}> */}
      <View style={style.boxTitle}>
        <ReturnArrow onPress={() => navigation.goBack()} />
        <Text style={style.textTitle}>Cadastro de Médico</Text>
      </View>
      <View style={style.form}>
        <View style={style.dadosmedico}>
          <Text style={style.formLabel}>Nome</Text>
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TextInput style={style.input} onChangeText={setName} value={name} />
          <Text style={style.formLabel}>E-mail</Text>
          <TextInput
            style={style.input}
            onChangeText={setEmail}
            value={email}
          />

          <Telefone onChange={handleTelephone} />

          {/* <Text style={style.formLabel}>Especialidade</Text> */}
          <SpecialtyInput label="Especialidade" onValueChange={setSpecialty} />

          <Text style={style.formLabel}>Endereço</Text>
          <TextInput
            style={style.input}
            onChangeText={setAddress}
            value={address}
          />
          <Text style={style.formLabel}>Observações</Text>
          <TextInput
            style={style.obs}
            onChangeText={setObservation}
            value={observation}
            multiline
            numberOfLines={8}
          />
          <LargeButton text={"Cadastrar"} onPress={handleSubmit} />
        </View>
      </View>
      {/* </Pressable> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  form: {
    paddingHorizontal: 40,
  },

  boxTitle: {
    flexDirection: "row",
    // justifyContent: "center",
    paddingTop: 46,
    // paddingLeft:40,
    // paddingRight:40,
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
  dadosmedico: {
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
    textAlignVertical: "top",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 30,
  },
});
