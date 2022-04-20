import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import AddIcon from "../../../assets/icons8-adicionar-40.png";
import styles from "./styles";

export default function AddButton({ onPress, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onPress}
      >
        <Image source={AddIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}