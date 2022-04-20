import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const inputTelephone = function (options, error) {
  return {
    height: 50,
    width: options,
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: error ? "red" : "#7EA1C4",
    backgroundColor: "#F1F5F9",
    margin: 12,
    paddingLeft: 20,
    marginBottom: 30,
  };
};

export function Telefone({ onChange, validation = true }) {
  const [DDD, setDDD] = useState("");
  const [errorDDD, setErrorDDD] = useState(false);
  const [telephone, setTelephone] = useState("");
  const [errorTelephone, setErrorTelephone] = useState(false);

  const handleDDD = (text) => {
    let auxText = text.replace(/\s|\-/g, "");
    console.log(auxText.length);
    console.log(telephone.length);
    console.log(Number(auxText) < 11);
    if (validation) {
      if (
        (auxText.length > 0 && auxText.length < 2) ||
        Number(auxText) < 11 ||
        Number(auxText) > 99
      ) {
        setErrorDDD(true);
        onChange && onChange("error");
      } else {
        setErrorDDD(false);
        onChange && onChange(`${auxText}${telephone}`);
      }
    }
    setDDD(auxText);
  };

  const handleTelephone = (text) => {
    let auxText = text.replace(/\s|\-/g, "");
    console.log(auxText.length);
    console.log(DDD.length);
    if (validation) {
      if (auxText.length > 0 && auxText.length < 8) {
        setErrorTelephone(true);
        onChange && onChange("error");
      } else {
        setErrorTelephone(false);
        onChange && onChange(`${DDD}${auxText}`);
      }
    }
    setTelephone(auxText);
  };

  useEffect(() => {
    if (validation) {
      if (DDD.length >= 2 && !telephone.length) {
        setErrorTelephone(true);
        onChange && onChange("error");
      }
      if (!DDD.length && telephone.length >= 8) {
        setErrorDDD(true);
        onChange && onChange("error");
      }
      if (!DDD.length && !telephone.length) {
        setErrorDDD(false);
        setErrorTelephone(false);
        onChange && onChange("");
      }
    }
  }, [DDD, telephone]);

  return (
    <View style={style.telephone}>
      <View>
        {errorDDD && <Text style={style.errorDDD}>DDD inválido!</Text>}
        <Text style={style.formLabel}>DDD</Text>
        <TextInput
          style={inputTelephone(70, errorDDD)}
          value={DDD}
          onChangeText={handleDDD}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>
      <View>
        <Text style={style.formLabel}>Telefone</Text>
        {errorTelephone && (
          <Text style={style.errorTelephone}>Telefone inválido!</Text>
        )}
        <TextInput
          style={inputTelephone(220, errorTelephone)}
          value={telephone}
          onChangeText={handleTelephone}
          keyboardType="numeric"
          maxLength={9}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  telephone: {
    flexDirection: "row",
    alignSelf: "center",
  },
  formLabel: {
    fontFamily: "Roboto_100Thin",
    color: "#212F47",
    fontSize: 24,
    paddingLeft: 25,
    fontWeight: "100",
    paddingTop: 20,
  },

  errorDDD: {
    fontFamily: "Roboto_700Bold",
    color: "red",
    fontSize: 12,
    position: "absolute",
    top: 115,
    left: 25,
  },
  errorTelephone: {
    fontFamily: "Roboto_700Bold",
    color: "red",
    fontSize: 12,
    position: "absolute",
    top: 35,
    right: 15,
  },
});
