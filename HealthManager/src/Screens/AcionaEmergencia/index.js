import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";
import { ReturnArrow } from "../../Components/ReturnArrow/";
import { SmallButton } from "../../Components/Button";

export default function AcionaEmergencia({ navigation }) {
  const [aciona, setAciona] = useState(null);
  var segundos = 99999999;

  x = setInterval(function teste() {
    if (segundos <= 0) {
      clearInterval(x);
      Linking.canOpenURL("whatsapp://send?text=test").then((supported) => {
        if (supported) {
          return Linking.openURL(
            "whatsapp://send?phone=5561996561599&text=Estou precisando de socorro.\nLocalização: XXX rua XX casa XXX\nMensagem automática enviada pelo aplicativo Health Manager."
          );
        } else {
          return Linking.openURL(
            "https://api.whatsapp.com/send?phone=5561996561599&text=Estou precisando de socorro.\nLocalização: XXX rua XX casa XXX\nMensagem automática enviada pelo aplicativo Health Manager."
          );
        }
      });
      segundos = 99999999;
    } else {
      segundos = segundos - 1;
    }
  }, 1000);

  function clicaBotao() {
    setAciona(1);
    segundos = 10;
  }

  function clicaBotao2() {
    navigation.goBack();
  }

  return (
    <View>
      <ReturnArrow />
      <Image
        style={style.warningSymbol}
        source={require("../../../assets/icons8-erro-96.png")}
      />
      {aciona === null ? (
        <View>
          <Text style={style.warningText1}>
            Você confirma que deseja acionar um serviço de emergência?
          </Text>
          <View style={style.buttons}>
            <SmallButton text={"Sim"} onPress={() => clicaBotao()} />
            <SmallButton text={"Não"} onPress={() => navigation.goBack()} />
          </View>
        </View>
      ) : (
        <View>
          <Text style={style.warningText2}>
            Enviando mensagem em 10 segundos...
          </Text>

          <View style={style.button}>
            <SmallButton text={"Cancelar"} onPress={() => clicaBotao2()} />
          </View>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  warningSymbol: {
    alignSelf: "center",
    marginTop: 20,
  },
  warningText1: {
    textAlign: "center",
    marginTop: 125,
    marginBottom: 125,
    fontSize: 24,
  },
  buttons: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  warningText2: {
    textAlign: "center",
    marginTop: 125,
    marginBottom: 135,
    fontSize: 24,
  },
  button: {
    marginBottom: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
});
