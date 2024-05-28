
import { useNavigation, useRoute } from "@react-navigation/native";
import React,{useEffect,useState} from "react";
import { Button, StatusBar,StyleSheet,Text,TouchableOpacity,View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Head from "../components/Head";
import Footer from "../components/Footer";
import HeadListagem from "../components/HeadListagem";

interface EdicaoLivro{
    id:number;
    titulo:string;
    autor:string;
    data_de_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
}

const EdicaoLivro: React.FC=()=>{
    const [titulo, setTitulo]= useState<string>('');
    const [autor, setAutor]= useState<string>('');
    const [data_de_lancamento, setData_de_lancamento]= useState<string>('');
    const [editora, setEditora]= useState<string>('');
    const [sinopse, setSinopse]= useState<string>('');
    const [genero, setGenero]= useState<string>('');
    const [avaliacao, setAvaliacao]= useState<string>('');


    const navigation= useNavigation();
    const route = useRoute();
    

    return(

     

        <View  style={styles.container}>
            <StatusBar backgroundColor="#000000" barStyle="light-content"/>
             
            <View style={styles.header}>
            <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

             <View style={styles.form}>
                <TextInput style={styles.input} value={titulo} onChangeText={setTitulo}/>

                <TextInput style={styles.input} value={autor} onChangeText={setAutor} multiline/>

                <TextInput style={styles.input} value={data_de_lancamento} onChangeText={setData_de_lancamento} keyboardType="numeric"/>

                <TextInput style={styles.input} value={editora} onChangeText={setEditora} multiline/>

                <TextInput style={styles.input} value={sinopse} onChangeText={setSinopse} multiline/>

                <TextInput style={styles.input} value={genero} onChangeText={setGenero} multiline/>

                <TextInput style={styles.input} value={avaliacao} onChangeText={setAvaliacao} multiline/>

                <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={()=>{EdicaoLivro()}}>
                    <Text style={styles.buttonText1}>Entrar</Text>
                </TouchableOpacity>
                
            <View style={styles.menuList}></View>
            
            <Footer/>
            <Head/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C0C0C0' ,
        flex: 1
    },
    header: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        paddingVertical: 30,
    },
    headerIcon: {
        width: 300,
        height: 300,
        marginBottom: -80,
        marginTop: -80
    },
    form: {
        padding: 10,
        backgroundColor: '#C0C0C0',
        borderRadius: 10,
    },
    input: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10
    },
    imageButton: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
    },
    imageButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
        borderWidth: 10,
        borderColor: '#000000',
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    linhaTitle: {
        color:'#FFF',
    },
    menuList:{
        flexGrow: 1
    },
    buttonText1: {
        textAlign:'center',
        fontSize:16,
        lineHeight:40,
    },
});

export default EdicaoLivro;
