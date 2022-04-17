import React from "react";
import {TouchableOpacity, Image} from "react-native";
import {StyleSheet} from 'react-native'

export function ReturnArrow({ onPress }) {
    return(
        <TouchableOpacity style={styles.arrow} onPress={onPress}>
            <Image source={require("../../../assets/return.png")}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    arrow: {
        padding: 8,
    },
})