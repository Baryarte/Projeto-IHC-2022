import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import EmergencyIcon from "../../assets/icons/emergency.svg";
import styles from "./styles";

export default function EmergencyButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={onPress}
      >
        <EmergencyIcon width={42} height={42} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.label}>Emergência</Text>
    </View>
  );
}
