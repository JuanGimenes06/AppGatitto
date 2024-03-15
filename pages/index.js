import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import { ModalTokens } from '../components/modal';
import Slider from "@react-native-community/slider";
import { useState } from "react";

export function Home() {


    const [telaModal, configTelaModal] = useState(false)

    function gerarToken() {
        configTelaModal(true);
    }

    return (
        <ScrollView>
            <View style={ESTILO.container}>
                <View style={ESTILO.viewLogo}>
                    <Image source={require("../assets/logo.png")} style={ESTILO.logo} />

                    <Text>
                        Pizzaria De La Gattito
                    </Text>
                </View>

                <View style={ESTILO.linhaHeader}></View>

                <View style={ESTILO.conteudo}>

                    <View style={ESTILO.pizza}>
                        <Image source={require('../assets/pizza1.png')} style={ESTILO.imagem}></Image>

                        <Text style={ESTILO.textoPizza}>
                            Pizza Maine Coon
                        </Text>

                        <View style={ESTILO.linha}></View>
                    </View>

                    <View style={ESTILO.pizza}>
                        <Image source={require('../assets/pizza2.png')} style={ESTILO.imagem}></Image>

                        <Text style={ESTILO.textoPizza}>
                            Pizza Persa
                        </Text>

                        <View style={ESTILO.linha}></View>
                    </View>

                    <View style={ESTILO.pizza}>
                        <Image source={require('../assets/pizza3.png')} style={ESTILO.imagem}></Image>

                        <Text style={ESTILO.textoPizza}>
                            Pizza Siamesa
                        </Text>

                        <View style={ESTILO.linha}></View>
                    </View>

                    <View style={ESTILO.pizza}>
                        <Image source={require('../assets/pizza4.png')} style={ESTILO.imagem}></Image>

                        <Text style={ESTILO.textoPizza}>
                            Pizza Sphynxs
                        </Text>

                    </View>

                </View>

                <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                    <Text style={ESTILO.buttonText}>
                        Faça seu pedido!
                    </Text>
                </TouchableOpacity>


                <Modal visible={telaModal} animationType="fade" transparent={true}>
                    <ModalTokens handleClose={() => configTelaModal(false)} />
                </Modal>


            </View>
        </ScrollView>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        height: "200vh",
        backgroundColor: "#fff",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#C02D20",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 50 ,
        marginBottom: 50 ,
    },
    buttonText: {
        color: "#FFF"
    },
    conteudo: {
        width: "60%",
    },
    imagem: {
        borderRadius: 10,
        width: "50%",
    },
    pizza: {
        alignItems: "center",
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginTop: 10,
        marginBottom: 20,
    },
    linhaHeader: {
        width: '100%',
        height: 10,
        backgroundColor: "#FEF1E5", 
        marginBottom: 50,
    },
    textoPizza: {
        marginTop: 10,
    },
    viewLogo: {
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEF1E5",
    },
    logo: {
        height: 200,
        width: 300
    },
})