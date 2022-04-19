import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import moment from "moment";
import "moment/locale/pt-br";

// Create Date Picker component

export default function DateInput({
  label,
  onChange,
  verifyDate = true,
  styleContainer,
}) {
  moment.locale("pt-br");

  const [selectedDay, setSelectedDay] = useState(moment().date());
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [isDateWrong, setIsDateWrong] = useState(false);
  const pickerContainer = [
    styles.pickerContainer,
    isDateWrong && { borderColor: "red" },
  ];

  const putZero = (num) => {
    let numString = num.toString();

    if (numString < 10) {
      return "0" + numString;
    }
    return numString;
  };
  const makeNumArray = (num) => Array.from(Array(num).keys());

  useEffect(() => {
    let date = moment(
      `${selectedYear}-${selectedMonth}-${selectedDay}`,
      "YYYY-MM-DD"
    );

    if (verifyDate) {
      if (date.isSameOrAfter(moment(), "day")) {
        setIsDateWrong(false);
      } else {
        setIsDateWrong(true);
      }
    }
    onChange && onChange(date, isDateWrong);
  }, [selectedDay, selectedMonth, selectedYear]);

  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerRow}>
        <View style={pickerContainer}>
          <Picker
            style={styles.monthAndDayPicker}
            itemStyle={styles.pickerText}
            // dropdownIconColor={styles.pickerArrow}
            selectedValue={selectedDay}
            onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
          >
            {makeNumArray(31).map((item, index) => (
              <Picker.Item
                key={index}
                style={styles.pickerItem}
                label={putZero(index + 1)}
                value={parseInt(putZero(index + 1))}
                mode={"dropdown"}
              />
            ))}
          </Picker>
        </View>
        <Text style={styles.bar}>{`/`}</Text>
        <View style={pickerContainer}>
          <Picker
            style={styles.monthAndDayPicker}
            selectedValue={selectedMonth}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedMonth(itemValue)
            }
          >
            {makeNumArray(12).map((item, index) => (
              <Picker.Item
                style={styles.pickerItem}
                key={index}
                label={putZero(index + 1)}
                value={parseInt(putZero(index + 1))}
                mode={Picker.MODE_DROPDOWN}
              />
            ))}
          </Picker>
        </View>
        <Text style={styles.bar}>{`/`}</Text>
        <View style={pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedYear}
            onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
          >
            {makeNumArray(300).map((item, index) => {
              let value = new Date().getFullYear() - 125 + index + 1;
              return (
                <Picker.Item
                  style={styles.pickerItem}
                  key={index}
                  label={value.toString()}
                  value={value}
                  mode={"dropdown"}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    </View>
  );
}
