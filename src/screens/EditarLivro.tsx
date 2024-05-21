import { Link, useNavigation, useRoute } from "@react-navigation/native";
import React,{ChangeEvent, FormEvent, useEffect,useState} from "react";
import { Button, StatusBar,StyleSheet,Text,TouchableOpacity,View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Head from "../components/Head";
import Footer from "../components/Footer";
// import axios from "axios";
// import Swal from "sweetalert2";


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

const EditarLivro: React.FC=()=>{
    const [titulo, setTitulo]= useState<string>('');
    const [autor, setAutor]= useState<string>('');
    const [data_de_lancamento, setData_de_lancamento]= useState<string>('');
    const [editora, setEditora]= useState<string>('');
    const [sinopse, setSinopse]= useState<string>('');
    const [genero, setGenero]= useState<string>('');
    const [avaliacao, setAvaliacao]= useState<string>('');


    const navigation= useNavigation();
    const route = useRoute();


    useEffect(()=>{
        const{livro}=route.params;

        setTitulo(livro.titulo);
        setAutor(livro.autor);
        setData_de_lancamento(livro.data_de_lancamento);
        setEditora(livro.editora);
        setSinopse(livro.sinopse);
        setGenero(livro.genero);
        setAvaliacao(livro.avaliacao);
    })

      
        
    return(
        
        <View  style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
             < Head/>
             <View style={styles.form}>
                <TextInput style={styles.input} value={titulo} onChangeText={setTitulo}/>

                <TextInput style={styles.input} value={autor} onChangeText={setAutor} multiline/>

                <TextInput style={styles.input} value={data_de_lancamento} onChangeText={setData_de_lancamento} keyboardType="numeric"/>

                <TextInput style={styles.input} value={editora} onChangeText={setEditora} multiline/>

                <TextInput style={styles.input} value={sinopse} onChangeText={setSinopse} multiline/>

                <TextInput style={styles.input} value={genero} onChangeText={setGenero} multiline/>

                <TextInput style={styles.input} value={avaliacao} onChangeText={setAvaliacao} multiline/>
                
              

             <TouchableOpacity style={styles.button}onPress={()=> navigation.goBack()}>
                <Text  style={styles.buttonText}>Voltar</Text>
             </TouchableOpacity>
       
                <View style={styles.menuList}></View>
                <Footer/>

             

        
             </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'red',
        paddingVertical:10,
        alignItems:'center'

    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    form:{
        padding:10,
        backgroundColor:'f0f0f0',
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
  imagemButtonText:{
       color:'white',
       fontWeight:'bold'
  },
  imagemSelecionada:{
  width:200,
  height:200,
  resizeMode:'cover',
  borderRadius:5,
  marginBottom:10
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
  }
});
export default EditarLivro;