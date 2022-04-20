import React, {useState} from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import style from "./style";

export function HomeButton({text, image, onPress, isPressed = false}) {
    
    return(
        <TouchableOpacity style={[style.button, isPressed && {backgroundColor: "#3A506B"} ]} onPress={onPress} >
            
            <View style={style.textPart}> 
                <Text style={[style.buttonText, isPressed && {color: "#F1F5F9"}]}>{text}</Text>
            </View>
            <View style={style.iconPart}>
                <View style={style.occupy}/>
                
                <Image style={style.image} source={image} />
            </View>

        </TouchableOpacity>
    );
}