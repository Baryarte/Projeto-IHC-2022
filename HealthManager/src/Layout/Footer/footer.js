import React from "react";
import {View, StyleSheet, Text, ScrollView, Image} from "react-native";

export function Footer(){

    return(
        
        
        <View style={style.footer1}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={style.footer}>
                <Image style={style.image} source={require("../../../assets/icons8-calendario-64.png")}/>
                <Image style={style.image} source={require("../../../assets/botao-home.png")}/>
                <Image style={style.image} source={require("../../../assets/icons8-health-64.png")}/>
            </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    footer1: {
        position: "relative",
        left: 0,
        bottom: 0,
        flex: 1
    },
    footer: {
        backgroundColor: "#3A506B",
        height: 50,
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        tintColor: "white"
    }
})