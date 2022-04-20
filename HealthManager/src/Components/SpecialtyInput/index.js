import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

// Create Doctor Specialty Picker component

export default function SpecialtyInput({ label, onValueChange }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const especialidades = [
    "",
    "Cardiologista",
    "Clínico Geral",
    "Cirurgião",
    "Endocrinologista",
    "Dermatologista",
    "Outro",
  ];

  const onChange = (itemValue, itemIndex) => {
    setSelectedSpecialty(itemValue);
    onValueChange(itemValue);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        <Picker
          style={styles.monthAndDayPicker}
          itemStyle={styles.pickerItem}
          // dropdownIconColor={styles.pickerArrow}
          selectedValue={selectedSpecialty}
          onValueChange={onChange}
        >
          {especialidades.map((item, index) => (
            <Picker.Item
              key={index}
              style={styles.pickerItem}
              label={item}
              value={item}
              mode={"dropdown"}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}
