import React, { useState } from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import { ReturnArrow } from '../../Components/ReturnArrow/';
import { SmallButton } from '../../Components/Button';

export default function AcionaEmergencia(){
    return(
        <View>
            <ReturnArrow/>
            <Image style={style.warningSymbol} source={require("../../../assets/icons8-erro-96.png")}/>

            <Text style={style.warningText}>Você confirma que deseja acionar um serviço de emergência?</Text>

            <View style={style.buttons}>
                <SmallButton text={"Sim"}/>
                <SmallButton text={"Não"}/>
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
        marginTop:140,
        marginBottom:140,
        paddingLeft:20,
        fontSize:24,
    },
    buttons: {
        marginBottom:20,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection: "row",
    },
})