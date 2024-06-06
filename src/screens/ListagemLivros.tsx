
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, View, TextInput, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import { ScrollView } from "react-native-gesture-handler";
import HeadListagem from "../components/HeadListagem";



interface Livro {
    id: string;
    titulo: string;
    autor: string;
    data_de_lancamento: string;
    editora: string;
    sinopse: string;
    genero: string;
    avaliacao: string;

}

const renderItem = ({ item }: { item: Livro }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textTitulo}>{item.titulo}</Text>
        <Text style={styles.textAutor}>{item.autor}</Text>
        <Text style={styles.textData}>{item.data_de_lancamento}</Text>
        <Text style={styles.textEditora}>{item.editora}</Text>
        <Text style={styles.textSinopse}>{item.sinopse}</Text>
        <Text style={styles.textGenero}>{item.genero}</Text>
        <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
    </TouchableOpacity>
);

function Listagem(): React.JSX.Element {
    const [livro, setLivro] = useState<Livro[]>([]);

    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.233:8000/api/livro/retornarTodos');
                setLivro(response.data);

                console.log(livro)
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);
    console.log(renderItem);

    return (

        <View style={styles.container}>

            <ImageBackground source={require('../assets/images/Fundo.png')} style={styles.background} />
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <HeadListagem />


            <View style={styles.header}>
                <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('../assets/images/lupa.png')} />

                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={livro}
                renderItem={renderItem}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                contentContainerStyle={styles.menuList}
            />
            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>


            <Footer />
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linhaTitle: {
        color: '#2C7DA0',
        marginBottom: -45,
        marginTop: 40
    },
    scroll: {},
    background: {
        height: 760,
        flex: 1
    },
    button: {
        backgroundColor: '#2C7DA0',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: -5
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30
    },
    headerIcon: {
        width: 250,
        height: 250,
        marginBottom: -20,
        marginTop: -100
    },
    item: {
        backgroundColor: 'white',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginTop: 30
    },
    textTitulo: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textAutor: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textGenero: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textData: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textEditora: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textSinopse: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textAvaliacao: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        height: 100,
        width: 170,
        borderRadius: 10,
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    pesquisa: {
        fontSize: 13,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        borderRadius: 100,
        alignItems: 'center',
        width: '78%',
        paddingLeft: 50,
        marginTop: -50,
        marginLeft: -10
    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    pesquisaicon: {
        width: 90,
        height: 90,
        marginTop: -40
    },
    linha: {
        color: 'white',
        marginTop: -8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuList: {
        flexGrow: 1
    },
});
export default Listagem