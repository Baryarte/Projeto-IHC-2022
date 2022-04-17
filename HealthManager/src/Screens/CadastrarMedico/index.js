import React, { useState } from 'react';
import {Text, TextInput, View, Pressable, Keyboard, StyleSheet} from "react-native";
import {Telefone} from '../../Components/Telefone/telefone';
import { ReturnArrow } from '../../Components/ReturnArrow/';
import { LargeButton } from '../../Components/Button';

export default function CadastrarMedico(){
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [ddd, setDdd] = useState(null)
    const [telephone, setTelephone] = useState(null)
    const [specialty, setSpecialty] = useState(null)
    const [address, setAddress] = useState(null)
    const [observation, setObservation] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    function nameCheck(){
        if(name == null){
            setErrorMessage("Campo Obrigatório*")
            return
        }
    }

    return(
        <Pressable on Press={Keyboard.dismiss}>
            <ReturnArrow/>
            <View style={style.boxTitle}>
                <Text style={style.textTitle}>Cadastro de Médico</Text>
            </View>
            <View style={style.dadosmedico}>
                
                <Text style={style.formLabel}>Nome</Text>
                <Text style={style.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setName}
                    value={name}
                />
                <Text style={style.formLabel}>E-mail</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setEmail}
                    value={email}
                />

                <Telefone/>

                <Text style={style.formLabel}>Especialidade</Text>

                
                <Text style={style.formLabel}>Endereço</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setAddress}
                    value={address}
                />
                <Text style={style.formLabel}>Observações</Text>
                <TextInput
                    style={style.obs}
                    onChangeText={setObservation}
                    value={observation}
                    multiline
                    numberOfLines={8}
                />
                <LargeButton text={"Cadastrar"} onPress={() =>{nameCheck()}}/>
            </View>
            
        </Pressable>
    );
}

const style = StyleSheet.create({
    boxTitle: {
        justifyContent:"center",
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:30,
    },
    textTitle: {
        color:"#212F47",
        fontSize:28,
        fontWeight:"normal",
    },
    dadosmedico: {
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    formLabel: {
        color:"#212F47",
        fontSize:24,
        paddingLeft:40,
        fontWeight:"100",
        paddingTop: 20,
    },
    input: {
        height:50,
        width:320,
        alignSelf: "center",
        borderRadius:50,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:30
    },
    obs: {
        height:200,
        width:320,
        alignSelf: "center",
        borderRadius:50,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:30,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        textAlignVertical: "top"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:30,
    }
})