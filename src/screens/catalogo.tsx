import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

function catalogo(): React.JSX.Element{
    return(
        <View >
            <Head />
        <Text >
            Tela da livraria
        </Text>
        <Footer/>
    </View>
    );

}

export default catalogo;