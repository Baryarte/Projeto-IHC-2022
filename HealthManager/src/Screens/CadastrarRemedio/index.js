import React from 'react';
import {Text, TextInput, View, Pressable, Keyboard} from "react-native";
import { ReturnArrow } from '../../Components/ReturnArrow/';
import style from './style';
import { LargeButton } from '../../Components/Button';

export default function CadastrarRemedio(){
    return(
        <Pressable on Press={Keyboard.dismiss}>
            <ReturnArrow/>
            <View style={style.boxTitle}>
                <Text style={style.textTitle}>Cadastro de Remédio</Text>
            </View>
            <View style={style.dadosremedio}>
                <Text style={style.formLabel}>Nome</Text>
                <TextInput
                    style={style.input}
                />
                <Text style={style.formLabel}>Dose</Text>
                <TextInput
                    style={style.input}
                />

                <Text style={style.formLabel}>Hora</Text>
                

                <Text style={style.formLabel}>Período</Text>

                <Text style={style.formLabel}>Dias da Semana</Text>

                <Text style={style.formLabel}>Quantidade</Text>
                <TextInput
                    style={style.input}
                />

                <Text style={style.formLabel}>Validade</Text>

                <Text style={style.formLabel}>Término</Text>

                <View>
                    <Text style={style.formLabel}>Observações</Text>
                    <TextInput
                        style={style.obs}
                        multiline
                        numberOfLines={8}
                    />
                </View>

                <LargeButton text={"Cadastrar"} onPress={() =>{nameCheck()}}/>
            </View>
            
        </Pressable>
    );
}