import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import moment from "moment";
import "moment/locale/pt-br";

export default function HourInput({ label, onValueChange, styleContainer }) {
  moment.locale("pt-br");

  const [selectedHour, setSelectedHour] = useState(moment().hour());
  const [selectedMinutes, setSelectedMinutes] = useState(moment().minute());

  const makeNumArray = (num) => Array.from(Array(num).keys());

  useEffect(() => {
    onValueChange && onValueChange(`${selectedHour}:${selectedMinutes}`);
    // console.log(`${selectedHour}:${selectedMinutes}`);
  }, [selectedHour, selectedMinutes]);

  return (
    <View style={styleContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerRow}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedHour}
            onValueChange={setSelectedHour}
          >
            {makeNumArray(24).map((hour) => (
              <Picker.Item
                key={hour}
                label={hour < 10 ? `0${hour}` : `${hour}`}
                value={hour}
                style={styles.pickerItem}
                mode="dropdown"
              />
            ))}
          </Picker>
        </View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedMinutes}
            onValueChange={setSelectedMinutes}
          >
            {makeNumArray(60).map((min) => (
              <Picker.Item
                key={min}
                label={min < 10 ? `0${min}` : `${min}`}
                value={min}
                style={styles.pickerItem}
                mode="dropdown"
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}
