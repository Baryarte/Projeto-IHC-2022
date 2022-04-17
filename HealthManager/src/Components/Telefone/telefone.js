import React from 'react';
import {Text, TextInput, View, StyleSheet} from "react-native"

const inputTelefone = function(options){
    return {
        height:50,
        width:options,
        alignSelf: "center",
        borderRadius:50,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
        paddingLeft:20,
        marginBottom:30
    }
}

export function Telefone(){
    return(
        <View style={style.telefone}>
            <View>
                <Text style={style.formLabel}>DDD</Text>
                <TextInput
                    style={inputTelefone(70)}
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
            <View>
                <Text style={style.formLabel}>Telefone</Text>
                <TextInput
                    style={inputTelefone(220)}
                    keyboardType="numeric"
                    maxLength={9}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    telefone: {
        flexDirection: "row",
        alignSelf: "center"
    },
    formLabel: {
        color:"#212F47",
        fontSize:24,
        paddingLeft:30,
        fontWeight:"100",
        paddingTop: 20,
    },
})