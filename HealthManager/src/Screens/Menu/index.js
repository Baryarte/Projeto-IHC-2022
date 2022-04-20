import React, {useState} from "react"
import {Text, View, ScrollView, Image} from "react-native"
import styles from "./style"
import { SmallButton } from "../../Components/Button/"
import EmergencyButton from "../../Components/EmergencyButton/EmergencyButton"
import AddButton from "../../Components/AddButton"

export default function Menu(){

    const [option, setOption] = useState(null)

    function selectOption(opt) {
        if(option == opt) {
            setOption(null)
        } else {
            setOption(opt)
        }
    }

    return(
        <ScrollView marginTop={60}>
            <View style={styles.buttons}>
                    <SmallButton text={"Remédios"} onPress={() => selectOption(1)}/>
                    <SmallButton text={"Médicos"} onPress={() => selectOption(2)}/>
            </View>
            <View style={styles.buttons}>
                    <SmallButton text={"Consultas"} onPress={() => selectOption(3)}/>
                    <SmallButton text={"Saúde"} onPress={() => selectOption(4)}/>
            </View>

            {option === 1 ?
            <View>
                <View style={styles.align}>
                    <Text style={styles.title}>Remédios</Text>
                    <AddButton style={styles.add}/>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Manhã</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Tarde</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Noite</Text>
                    </View>
                </View>
            </View>

            : option === 2 ?
            <View>
                <View style={styles.align}>
                    <Text style={styles.title}>Médicos</Text>
                    <AddButton style={styles.add}/>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.barHuge}/>
                        <View>
                            <Text style={styles.name}>Dr. Josias José</Text>
                            <Text style={styles.information}>Oftalmologista</Text>
                            <Text style={styles.information}>(61) 92222-1111</Text>
                            <Text style={styles.information}>HOB, SGAS II Área Sul 607</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.barHuge}/>
                            <View>
                                <Text style={styles.name}>Dr. Maria Marcela</Text>
                                <Text style={styles.information}>Cardiologista</Text>
                                <Text style={styles.information}>(61) 93333-4444</Text>
                                <Text style={styles.information}> SHLN 516 CONJUNTO D</Text>
                            </View>
                        </View>
                </View>
            </View>

            : option === 3 ?
            <View>
                <View style={styles.align}>
                    <Text style={styles.title}>Consultas</Text>
                    <AddButton style={styles.add}/>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.barHuge}/>
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
                        <View style={styles.barHuge}/>
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

            : option === 4 ?
            <View>
                <View style={styles.align}>
                    <Text style={styles.title}>Saúde</Text>
                    <AddButton style={styles.add}/>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Batimento Cardíaco</Text>
                        <View style={styles.boxHeart}>
                            <Image source={require("../../../assets/batimento.png")} style={styles.heartbeat}/>
                        </View>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Batimentos por Minuto</Text>
                        <Text style={styles.greenText}>65 bpm</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Pressão Arterial</Text>
                        <Text style={styles.greenText}>102 / 68</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Saturação Sanguínea</Text>
                        <Text style={styles.greenText}>98%</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Temperatura Corporal</Text>
                        <Text style={styles.greenText}>36.8 °C</Text>
                    </View>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <Text style={styles.period}>Qualidade do Sono</Text>
                        <Text style={styles.greenText}>Ótima</Text>
                    </View>
                </View>
            </View>

            :
            <View>
                <View style={styles.align}>
                    <Text style={styles.title}>Perfil</Text>
                </View>
                <View style={styles.space}>
                    <View style={styles.alignBar}>
                        <View style={styles.bar}/>
                        <View>
                            <Text style={styles.name}>Nome do usuário</Text>
                            <Text style={styles.information}>E-mail do usuário</Text>
                        </View>
                    </View>
                </View>
            </View>
            }
            <EmergencyButton styles={styles.emergency}/>
        </ScrollView>
    );
}