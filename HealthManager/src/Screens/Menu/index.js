import React, { useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "./style";
import { HomeButton } from "../../Components/HomeButton";
import EmergencyButton from "../../Components/EmergencyButton/EmergencyButton";
import AddButton from "../../Components/AddButton";
import remNorm from "../../../assets/remedio-normal.png";
import remBran from "../../../assets/remedio-branco.png";
import douNorm from "../../../assets/doutor-normal.png";
import douBran from "../../../assets/doutor-branco.png";
import conNorm from "../../../assets/consulta-normal.png";
import conBran from "../../../assets/consulta-branco.png";
import sauNorm from "../../../assets/saude-normal.png";
import sauBran from "../../../assets/saude-branco.png";
import { StatusBar } from "expo-status-bar";

export default function Menu({ navigation }) {
  const [option, setOption] = useState(null);
  const [image1, setImage1] = useState(remNorm);
  const [image2, setImage2] = useState(douNorm);
  const [image3, setImage3] = useState(conNorm);
  const [image4, setImage4] = useState(sauNorm);
  const [imageP1, setImageP1] = useState("False");
  const [imageP2, setImageP2] = useState("False");
  const [imageP3, setImageP3] = useState("False");
  const [imageP4, setImageP4] = useState("False");

  function selectOption(opt) {
    if (option == opt) {
      setOption(null);
      setImage1(remNorm);
      setImage2(douNorm);
      setImage3(conNorm);
      setImage4(sauNorm);
      setImageP1("False");
      setImageP2("False");
      setImageP3("False");
      setImageP4("False");
    } else {
      if (opt == 1) {
        setImage1(remBran);
        setImage2(douNorm);
        setImage3(conNorm);
        setImage4(sauNorm);
        setImageP1("True");
        setImageP2("False");
        setImageP3("False");
        setImageP4("False");
      } else if (opt == 2) {
        setImage1(remNorm);
        setImage2(douBran);
        setImage3(conNorm);
        setImage4(sauNorm);
        setImageP1("False");
        setImageP2("True");
        setImageP3("False");
        setImageP4("False");
      } else if (opt == 3) {
        setImage1(remNorm);
        setImage2(douNorm);
        setImage3(conBran);
        setImage4(sauNorm);
        setImageP1("False");
        setImageP2("False");
        setImageP3("True");
        setImageP4("False");
      } else if (opt == 4) {
        setImage1(remNorm);
        setImage2(douNorm);
        setImage3(conNorm);
        setImage4(sauBran);
        setImageP1("False");
        setImageP2("False");
        setImageP3("False");
        setImageP4("True");
      }
      setOption(opt);
    }
  }

  return (
    <>
      <ScrollView marginTop={60}>
        <View style={styles.compButtons}>
          <HomeButton
            text={"Remédios"}
            onPress={() => selectOption(1)}
            image={image1}
            isPressed={imageP1}
          />
          <HomeButton
            text={"Médicos"}
            onPress={() => selectOption(2)}
            image={image2}
            isPressed={imageP2}
          />
          <HomeButton
            text={"Consultas"}
            onPress={() => selectOption(3)}
            image={image3}
            isPressed={imageP3}
          />
          <HomeButton
            text={"Saúde"}
            onPress={() => selectOption(4)}
            image={image4}
            isPressed={imageP4}
          />
        </View>

        {option === 1 ? (
          <View>
            <View style={styles.align}>
              <Text style={styles.title}>Remédios</Text>
              <AddButton
                style={styles.add}
                onPress={() => navigation.navigate("CadastrarRemedio")}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Manhã</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Tarde</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Noite</Text>
              </View>
            </View>
          </View>
        ) : option === 2 ? (
          <View>
            <View style={styles.align}>
              <Text style={styles.title}>Médicos</Text>
              <AddButton
                style={styles.add}
                onPress={() => navigation.navigate("CadastrarMedico")}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.barHuge} />
                <View>
                  <Text style={styles.name}>Dr. Josias José</Text>
                  <Text style={styles.information}>Oftalmologista</Text>
                  <Text style={styles.information}>(61) 92222-1111</Text>
                  <Text style={styles.information}>
                    HOB, SGAS II Área Sul 607
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.barHuge} />
                <View>
                  <Text style={styles.name}>Dr. Maria Marcela</Text>
                  <Text style={styles.information}>Cardiologista</Text>
                  <Text style={styles.information}>(61) 93333-4444</Text>
                  <Text style={styles.information}> SHLN 516 CONJUNTO D</Text>
                </View>
              </View>
            </View>
          </View>
        ) : option === 3 ? (
          <View>
            <View style={styles.align}>
              <Text style={styles.title}>Consultas</Text>
              <AddButton
                style={styles.add}
                onPress={() => navigation.navigate("CadastrarConsulta")}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.barHuge} />
                <View>
                  <Text style={styles.name}>27/04</Text>
                  <Text style={styles.information}>15:00</Text>
                </View>
                <View>
                  <Text style={styles.name}>Dr. Maria Marcela</Text>
                  <Text style={styles.information}>Cardiologista</Text>
                  <Text style={styles.information}>SHLN 516 CONJUNTO D</Text>
                </View>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.barHuge} />
                <View>
                  <Text style={styles.name}>02/05</Text>
                  <Text style={styles.information}>11:00</Text>
                </View>
                <View>
                  <Text style={styles.name}>Dr. Marco</Text>
                  <Text style={styles.information}>Dermatologista</Text>
                  <Text style={styles.information}>SHLN 516 CONJUNTO F</Text>
                </View>
              </View>
            </View>
          </View>
        ) : option === 4 ? (
          <View>
            <View style={styles.align}>
              <Text style={styles.title}>Saúde</Text>
              <AddButton
                style={styles.add}
                //   onPress={() => navigation.navigate("")}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Batimento Cardíaco</Text>
                <View style={styles.boxHeart}>
                  <Image
                    source={require("../../../assets/batimento.png")}
                    style={styles.heartbeat}
                  />
                </View>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Batimentos por Minuto</Text>
                <Text style={styles.greenText}>65 bpm</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Pressão Arterial</Text>
                <Text style={styles.greenText}>102 / 68</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Saturação Sanguínea</Text>
                <Text style={styles.greenText}>98%</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Temperatura Corporal</Text>
                <Text style={styles.greenText}>36.8 °C</Text>
              </View>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <Text style={styles.period}>Qualidade do Sono</Text>
                <Text style={styles.greenText}>Ótima</Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.align}>
              <Text style={styles.title}>Perfil</Text>
            </View>
            <View style={styles.space}>
              <View style={styles.alignBar}>
                <View style={styles.bar} />
                <View>
                  <Text style={styles.name}>Nome do usuário</Text>
                  <Text style={styles.information}>E-mail do usuário</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <EmergencyButton
        styles={styles.emergency}
        onPress={() => navigation.navigate("AcionaEmergencia")}
      />
    </>
  );
}
