import React from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  ScrollView,
} from "react-native";
import { ReturnArrow } from "../../Components/ReturnArrow/";
import style from "./style";
import { LargeButton } from "../../Components/Button";
import SpecialtyInput from "../../Components/SpecialtyInput";

export default function CadastrarConsulta() {
  return (
    <ScrollView style={style.container}>
      {/* <Pressable onPress={Keyboard.dismiss}> */}
      <ReturnArrow />
      <View style={style.boxTitle}>
        <Text style={style.textTitle}>Cadastro de Consulta</Text>
      </View>
      <View style={style.dadosremedio}>
        <Text style={style.formLabel}>Título</Text>

        <TextInput style={style.input} />

        <Text style={style.formLabel}>Data</Text>

        <Text style={style.formLabel}>Hora</Text>

        {/* <Text style={style.formLabel}>Especialidade</Text> */}
        <SpecialtyInput label="Especialidade" />

        <Text style={style.formLabel}>Endereço</Text>
        <TextInput style={style.input} />

        <Text style={style.formLabel}>Observações</Text>
        <TextInput style={style.obs} multiline numberOfLines={8} />

        <LargeButton text={"Cadastrar"} />
      </View>
      {/* </Pressable> */}
    </ScrollView>
  );
}
