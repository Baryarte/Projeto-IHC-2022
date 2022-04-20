import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./style";
import { LargeButton } from "../../Components/Button/";
import { ReturnArrow } from "../../Components/ReturnArrow/";

export default function SignUp({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [different, setDifferent] = useState(null);

  function emailPassCheck() {
    if (name == null || email == null || password == null || confirm == null) {
      setErrorMessage("Campo obrigatório*");
      if (password != confirm) setDifferent("A senha não coincide*");
      return;
    }
    setName(null);
    setEmail(null);
    setPassword(null);
    setConfirm(null);
    setErrorMessage(null);
    setDifferent(null);

    navigation.navigate("Menu");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitle}>
        <ReturnArrow onPress={() => navigation.goBack()} />
        <Text style={styles.textTitle}>Cadastro de Conta</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nome</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <Text style={styles.formLabel}>E-mail</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <Text style={styles.formLabel}>Senha</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <Text style={styles.formLabel}>Confirme a senha</Text>
        <Text style={styles.errorMessage}>
          {errorMessage} {different}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirm}
          value={confirm}
          secureTextEntry={true}
        />
        <LargeButton
          text={"Cadastrar"}
          onPress={() => {
            emailPassCheck();
          }}
        />
      </View>
    </ScrollView>
  );
}
