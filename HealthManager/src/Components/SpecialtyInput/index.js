import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

// Create Doctor Specialty Picker component

export default function SpecialtyInput({ label }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const especialidades = [
    "Escolha uma opção",
    "Cardiologista",
    "Clínico Geral",
    "Cirurgião",
    "Endocrinologista",
    "Dermatologista",
    "Outro",
  ];

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        <Picker
          style={styles.monthAndDayPicker}
          itemStyle={styles.pickerItem}
          // dropdownIconColor={styles.pickerArrow}
          selectedValue={selectedSpecialty}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedSpecialty(itemValue)
          }
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
