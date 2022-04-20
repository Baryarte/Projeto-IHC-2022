import React, { useState } from "react";
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
import DateInput from "../../Components/DateInput/DateInput";
import HourInput from "./../../Components/HourInput/HourInput";
import { storeAppointment } from "../../Firebase/appointment";

export default function CadastrarConsulta({ navigation }) {
  const [title, setTitle] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const dateHandler = (date) => {
    setDate(date);
  };

  const specialtyHandler = (itemValue) => {
    setSpecialty(itemValue);
  };

  const hourHandler = (hour) => {
    setHour(hour);
  };

  const submitHandler = () => {
    storeAppointment(title, date.format(), hour, specialty, address, notes);
  };

  return (
    <ScrollView style={style.container}>
      {/* <Pressable onPress={Keyboard.dismiss}> */}
      <View style={style.boxTitle}>
        <ReturnArrow onPress={() => navigation.goBack()} />
        <Text style={style.textTitle}>Cadastro de Consulta</Text>
      </View>
      <View style={style.form}>
        <View style={style.dadosremedio}>
          <Text style={style.formLabel}>Título</Text>

          <TextInput
            style={style.input}
            value={title}
            onChangeText={setTitle}
          />

          {/* <Text style={style.formLabel}>Data</Text> */}

          <DateInput
            label={"Data"}
            styleContainer={style.dateInputContainer}
            onChange={dateHandler}
          />

          {/* <Text style={style.formLabel}>Hora</Text> */}
          <HourInput
            label={"Hora"}
            styleContainer={style.hourInputContainer}
            onValueChange={hourHandler}
          />

          {/* <Text style={style.formLabel}>Especialidade</Text> */}
          <SpecialtyInput
            label="Especialidade"
            onValueChange={specialtyHandler}
          />

          <Text style={style.formLabel}>Endereço</Text>
          <TextInput
            style={style.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={style.formLabel}>Observações</Text>
          <TextInput
            style={style.obs}
            multiline
            numberOfLines={8}
            value={notes}
            onChangeText={setNotes}
          />

          <LargeButton text={"Cadastrar"} onPress={submitHandler} />
        </View>
        {/* </Pressable> */}
      </View>
    </ScrollView>
  );
}
