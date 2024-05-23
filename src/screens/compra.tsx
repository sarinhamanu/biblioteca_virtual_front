import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

function Home(): React.JSX.Element{
    return(
        <View >
            <Head />
        <Text >
            Tela de Perfil
        </Text>
        <Footer/>
    </View>
    );

}

export default Home;