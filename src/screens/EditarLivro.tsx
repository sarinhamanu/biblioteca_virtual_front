import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { TextInput } from "react-native-gesture-handler";
import Footer from "../components/Footer"
import axios from "axios";



 
    const navigation= useNavigation();
    const route = useRoute();
    
    function EditarLivro(): React.JSX.Element {
        const [livro, setLivro] = useState<any[]>([]);
        const [titulo,setTitulo]= useState<string>('');
        const [autor,setAutor]= useState<string>('');
        const [data_de_lancamento, setDataLancamento]= useState<string>('');
        const [editora,setEditora]= useState<string>('');
        const [sinopse,setSinopse]= useState<string>('');
        const [genero, setGenero]= useState<string>('');
        const [avaliacao,setAvaliacao]= useState<string>('');
        const [erro, setErro] = useState<string>('');
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await axios.put('http://10.137.11.233/api/livro/update');
                setLivro(response.data.dados);
             } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }
        fetchData();
   
        
        const{Livro}= route.params;

        setTitulo(Livro.titulo);
        setAutor(Livro.autor);
        setDataLancamento(Livro.data_de_lancamento);
        setEditora(Livro.editora);
        setSinopse(Livro.sinopse);
        setGenero(Livro.genero);
        setAvaliacao(Livro.avaliacao);
    })
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <Head/>

            <View style={styles.form}>
             <TextInput style={styles.input} value={titulo} 
             onChangeText={setTitulo} multiline/>

            <TextInput style={styles.input} value={autor}
             onChangeText={setAutor} multiline />

            <TextInput style={styles.input} value={data_de_lancamento}
             onChangeText={setDataLancamento} multiline/>


             <TextInput style={styles.input} value={editora} 
             onChangeText={setEditora}/>

            <TextInput style={styles.input} value ={sinopse}
             onChangeText={setSinopse} multiline/>

            <TextInput style={styles.input} value={genero}
             onChangeText={setGenero} multiline/>

            <TextInput style={styles.input} value={avaliacao}
             onChangeText={setAvaliacao} multiline/>

              <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
                   <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>

              <View style={styles.menuList}></View>
              <Footer/>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
   header: {
    backgroundColor:'red',
    paddingVertical:10,
    alignItems:'center'
   },
   headerText:{
    fontSize: 20,
    fontWeight:'bold',
    color:'white'
   },
   form:{
    padding:10,
    backgroundColor:'#f0f0f0',
    marginBottom:10
   },
   input:{
    height:40,
    borderColor:'gray',
    borderWidth:1,
    marginBottom:10,
    paddingHorizontal:10,
    borderRadius:10
   },
   imageButton:{
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    alignItems:'center',
    marginBottom:10
   },
   imageButtonText:{
    color:'white',
    fontWeight:'bold'
   },
   imagemSelecionada:{
    width:200,
    height:200,
    resizeMode:'cover',
    borderRadius:5,
    marginBottom: 10
   },
   alinhamentoImagemSelecionada:{
    alignItems:'center'
   },
   button:{
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    alignItems:'center'
   },
   buttonText:{
    color:'white',
    fontWeight:'bold'
   },
   menuList:{
    flexGrow:1
   },

});

export default EditarLivro;