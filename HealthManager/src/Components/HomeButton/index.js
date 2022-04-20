import React, {useState} from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import style from "./style";

export function HomeButton({text, image, onPress, isPressed = false}) {
    
    return(
        <TouchableOpacity style={[style.button, isPressed === "True" ? {backgroundColor: "#3A506B"} : {backgroundColor: "#7EA1C4"}]} onPress={onPress} >
            
            <View style={style.textPart}> 
                <Text style={[style.buttonText, isPressed === "True" ? {color: "#F1F5F9"} : {color: "#212F47"}]}>{text}</Text>
            </View>
            <View style={style.iconPart}>
                <View style={style.occupy}/>
                
                <Image style={style.image} source={image} />
            </View>

        </TouchableOpacity>
    );
}