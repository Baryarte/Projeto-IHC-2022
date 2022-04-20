import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ReturnArrow } from "../../Components/ReturnArrow/";
import style from "./style";
import { LargeButton } from "../../Components/Button";
import DateInput from "../../Components/DateInput/DateInput";
import HourInput from "../../Components/HourInput/HourInput";
import { storeMedicine } from "../../Firebase/medicine";

export default function CadastrarRemedio({ navigation }) {
  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [dose, setDose] = useState(null);
  const [doseError, setDoseError] = useState(false);
  const [hour, setHour] = useState(null);
  const [period, setPeriod] = useState(null);
  const [days, setDays] = useState(new Set());
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState(null);
  const [end, setEnd] = useState(null);
  const [observation, setObservation] = useState("");
  const scrollRef = useRef(null);
  const daysWeek = ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab.", "Dom."];

  const handleDays = (day) => {
    let auxDays = new Set(days);

    if (auxDays.has(day)) {
      auxDays.delete(day);
    } else {
      auxDays.add(day);
    }
    setDays(auxDays);
  };

  const handleSubmit = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!dose) {
      setDoseError(true);
    } else {
      setDoseError(false);
    }
    console.log(name, hour, dose, expiration, end, days, quantity, observation);
    if (!name || !dose || expiration == "error" || end == "error") {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
      return;
    }

    storeMedicine(
      name,
      hour,
      dose,
      Array.from(days),
      expiration.format(),
      end.format(),
      quantity,
      observation
    );

    navigation.goBack();
  };

  return (
    <ScrollView ref={scrollRef} style={style.container}>
      {/* <Pressable on Press={Keyboard.dismiss}> */}
      <View style={style.boxTitle}>
        <ReturnArrow onPress={() => navigation.goBack()} />
        <Text style={style.textTitle}>Cadastro de Remédio</Text>
      </View>

      <View style={style.form}>
        <View style={style.dadosremedio}>
          <Text style={style.formLabel}>
            Nome{" "}
            <Text style={[style.mandatory, nameError && { color: "red" }]}>
              *
            </Text>
          </Text>
          <TextInput
            style={[style.input, nameError && { borderColor: "red" }]}
            value={name}
            onChangeText={setName}
          />

          <Text style={style.formLabel}>
            Dose{" "}
            <Text style={[style.mandatory, doseError && { color: "red" }]}>
              *
            </Text>
          </Text>
          <TextInput
            style={[style.input, nameError && { borderColor: "red" }]}
            value={dose}
            onChangeText={setDose}
          />

          {/* <Text style={style.formLabel}>Hora</Text> */}
          <HourInput
            label={"Hora"}
            styleContainer={style.hourInputContainer}
            onValueChange={setHour}
          />

          {/* <Text style={style.formLabel}>Período</Text> */}

          <Text style={style.formLabel}>Dias da Semana</Text>
          <View style={style.days}>
            {daysWeek.map((day, index) => (
              <TouchableOpacity
                key={day}
                style={[
                  style.dayButton,
                  days.has(day) && style.dayButtonSelected,
                ]}
                onPress={() => handleDays(day)}
              >
                <Text
                  style={[
                    style.daysText,
                    days.has(day) && style.daysTextSelected,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={style.formLabel}>Quantidade</Text>
          <TextInput
            style={style.input}
            value={quantity}
            onChangeText={setQuantity}
          />

          <DateInput
            label={"Validade"}
            onChange={setExpiration}
            styleContainer={[style.dateInputContainer, { marginTop: 23 }]}
          />
          <DateInput
            label={"Término"}
            onChange={setEnd}
            styleContainer={style.dateInputContainer}
          />

          <View style={style.obsContainer}>
            <Text style={style.formLabel}>Observações</Text>
            <TextInput
              style={style.obs}
              multiline
              numberOfLines={8}
              value={observation}
              onChangeText={setObservation}
            />
          </View>

          <LargeButton text={"Cadastrar"} onPress={handleSubmit} />
        </View>
      </View>
      {/* </Pressable> */}
    </ScrollView>
  );
}
