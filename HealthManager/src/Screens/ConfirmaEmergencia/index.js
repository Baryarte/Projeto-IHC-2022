import React, { useState } from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import { ReturnArrow } from '../../Components/ReturnArrow/';
import { SmallButton } from '../../Components/Button';

export default function ConfirmaEmergencia(){
    return(
        <View>
            <ReturnArrow/>
            <Image style={style.warningSymbol} source={require("../../../assets/icons8-erro-96.png")}/>

            <Text style={style.warningText}>Acionando emergência em 10 segundos...</Text>

            <View style={style.button}>
                <SmallButton text={"Cancelar"}/>
            </View>
            
        </View>
    );
}

const style = StyleSheet.create({
    warningSymbol: {
        alignSelf:"center",
        marginTop:20,
    },
    warningText: {
        textAlign:"center",
        marginTop:150,
        marginBottom:150,
        paddingLeft:20,
        fontSize:24,
    },
    button: {
        marginBottom:20,
        alignSelf:"center",
        flexDirection: "row",
    },
})