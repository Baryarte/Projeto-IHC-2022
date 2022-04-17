import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

export function LargeButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style.largeButton}> 
                <Text style={style.largeButtonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}

export function SmallButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style.smallButton}>
                <Text style={style.smallButtonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create({
    largeButton: {
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 30,
        backgroundColor: "#7EA1C4",
        height: 72,
        width: 320,
        alignSelf:"center",
        marginBottom: 20,
    },
    largeButtonText: {
        color: "#212F47",
        fontWeight: "600",
        fontSize: 28,
        paddingBottom: 4,
    },
    smallButton: {
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 30,
        backgroundColor: "#3A506B",
        height: 72,
        width: 150,
    },
    smallButtonText: {
        color: "#F1F5F9",
        fontWeight: "600",
        fontSize: 28,
        paddingBottom: 4,
    },
})