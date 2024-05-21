import { Header } from "@react-navigation/stack";
import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";


interface Livro{
    id:number;
    titulo:string;
    autor:string;
    data_de_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
   
}

function PesquisarLivro(): React.JSX.Element{
const navigation = useNavigation();
    
    const Livro: Livro[]=[
        {
            id: 1,
            titulo:'monstrinho',
            autor:'mariana',
            data_de_lancamento:'2018-04-26',
            editora:'suma',
            sinopse:'uma carinha triste que era feio...',
            genero:'terror',
            avaliacao:'você se sente dentro do livro uaaaau',
         
        },
        {
            id: 2,
            titulo:'monstrinho',
            autor:'mariana',
            data_de_lancamento:'2018-05-14',
            editora:'suma',
            sinopse:'uma carinha triste que era feio...',
            genero:'terror',
            avaliacao:'você se sente dentro do livro uaaaau',
            
        },
    ]


    const selecionaLivro =(Livro:Livro) =>{
         navigation.navigate('EditarLivro',{Livro});
    }

    const renderItem = ({ item }: {item:Livro}) =>{
        return(
            <TouchableOpacity style={styles.menuItem}
            onPress={()=> selecionaLivro(item)}>
               <Image source={require('../assets/images/capa.png')}
                style={styles.image}/>
                <View style={styles.itemDetails}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text style={styles.autor}>{item.autor}</Text>
                    <Text style={styles.data_lancamento}>{item.data_de_lancamento}</Text>
                    <Text style={styles.editora}>{item.editora}</Text>
                    <Text style={styles.sinopse}>{item.sinopse}</Text>
                    <Text style={styles.genero}>{item.genero}</Text>
                    <Text style={styles.avaliacao}>{item.avaliacao}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <View  style={styles.container}>
        <StatusBar backgroundColor="red" barStyle="light-content"/>
        <Head/>
        <FlatList data={Livro} renderItem={renderItem}
         keyExtractor={(item)=> item.id? item.id.toString():
         Math.random().toString()}  contentContainerStyle={styles.menuList}/>
         <Footer/>
    </View>
    );

}
const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    menuItem:{
        flexDirection: 'row',
        alignItems:'center',
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop :10
    },
    titulo:{
        fontSize:16,
        fontWeight:'bold'
    },
    itemDetails:{
        marginLeft:10,
        flex:1
    },
    autor:{
        fontSize:16,
        fontWeight:'bold'
    },
    data_lancamento:{
        fontSize:16,
        fontWeight:'bold'
    },
    editora:{
        fontSize:16,
        fontWeight:'bold'
    },
    sinopse:{
        fontSize:16,
        fontWeight:'bold'
    },
    genero:{
        fontSize:16,
        fontWeight:'bold'
    },
    avaliacao:{
        fontSize:16,
        fontWeight:'bold'
    },
    
    menuList:{
        flexGrow:1
    },
    image:{
        width:80,
        height:80,
        resizeMode:'cover',
        borderRadius:5
    }
})

export default PesquisarLivro;