import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import EmergencyIcon from "../../../assets/emergency.png";
import styles from "./styles";

export default function EmergencyButton({ onPress}) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={onPress}
      >
        <Image source={EmergencyIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.label}>Emergência</Text>
    </View>
  );
}