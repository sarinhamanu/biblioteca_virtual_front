import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, View, TextInput } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";




function Listagem(): React.JSX.Element {
    const [produto, setProduto] = useState<any[]>([]);
   
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.218/biblioteca_virtual/public/api/livros/visualizar');
                setProduto(response.data.dados);
             } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Livro }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.textTitulo}>{item.titulo}</Text>
            <Text style={styles.linha}>━━━━━━━━━━ •๋࣭ ⭑🕸🦇🕸๋࣭ ⭑• ━━━━━━━━━━</Text>
            <Text style={styles.textAutor}>{item.autor}</Text>
            <Text style={styles.textData}>{item.data_de_lancamento}</Text>
            <Text style={styles.textEditora}>{item.editora}</Text>
            <Text style={styles.textSinopse}>{item.sinopse}</Text>
            <Text style={styles.textGenero}>{item.genero}</Text>
            <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
        </TouchableOpacity>    
    );
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#640d14' barStyle='light-content' />
            <View style={styles.header}>
            <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('../assets/images/lupa.png')} />
                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={produto}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            

            </View>

    );

}

const styles = StyleSheet.create({
    container: {
         backgroundColor: '#000000' ,
         flex: 1
     },
     button: {
         
     },
     header: {
        backgroundColor: '#5B1824',
        alignItems: 'center',
        paddingVertical: 50,


    },
     headerIcon: {
         width: 300,
         height: 300,
         marginBottom: -90,
         marginTop: -90
     },
     item: {
        backgroundColor: '#C0C0C0',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#772B39',
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
        backgroundColor: '#FFFAE5',
        borderWidth: 3,
        borderColor: '#38040e',
        borderRadius: 100,
        alignItems: 'center',
        width: '75%',
        paddingLeft: 50

    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
    },
    pesquisaicon: {
        paddingLeft: 10,
        width: 40,
        height: 40
    },
    linha: {
        color: 'white',
        marginTop: -8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
 });
 export default Listagem;
            