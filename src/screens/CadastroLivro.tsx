import axios from "axios";
import React, { useState } from "react";
import { ScrollView, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";


const CadastroLivros: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [data_de_lancamento, setDataDeLancamento] = useState<string>('');
    const [editora, setEditora] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [avaliacao, setAvaliacao] = useState<string>('');
    const [error, setErrors] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');


    const validateForm = () => {
        const newErrors: any = {};


        if (!titulo) {
            newErrors.titulo = "O campo título é obrigatório";
        }
        if (!autor) {
            newErrors.autor = "O campo autor é obrigatório";
        }
        if (!data_de_lancamento) {
            newErrors.data_de_lancamento = "O campo data de lançamento é obrigatório";
        }
        if (!editora) {
            newErrors.editora = "O campo editora é obrigatório";
        }
        if (!sinopse) {
            newErrors.sinopse = "O campo sinopse é obrigatório";
        }
        if (!genero) {
            newErrors.genero = "O campo genero é obrigatório";
        }
        if (!avaliacao) {
            newErrors.avaliacao = "O campo avaliacao é obrigatório";
        }
        setErrors(newErrors);


        return !Object.keys(newErrors).length;
    };


    const CadastroLivros = async () => {
        try {
            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('autor', autor);
            formData.append('data_de_lancamento', data_de_lancamento);
            formData.append('editora', editora);
            formData.append('sinopse', sinopse);
            formData.append('genero', genero);
            formData.append('avaliacao', avaliacao);
            // formData.append('imagem', {
            //     uri: imagem,
            //     type: 'image/jpeg',
            //     name: new Date() + '.jpg',
            // });
            //console.log(formData);
            const response = await axios.post('http://10.137.11.233:8000/api/livro/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'


                }
            });
            console.log(response.data.success);
            if (response.data.success == false){
                console.log(response.data.error);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/Fundo.png')} style={styles.background} />




            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <Head />


            <View style={styles.header}>
                <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>


            <ScrollView style={styles.scroll}>


                <View style={styles.form}>


                    <TextInput
                        style={styles.input}
                        placeholder="Título:"
                        value={titulo}
                        onChangeText={setTitulo} />


                    <TextInput
                        style={styles.input}
                        placeholder="Autor:"
                        value={autor}
                        onChangeText={setAutor} />


                    <TextInput
                        style={styles.inputGenero}
                        placeholder="Gênero:"
                        value={genero}
                        onChangeText={setGenero}
                        multiline />


                    <TextInput
                        style={styles.inputDT}
                        placeholder="Data:"
                        value={data_de_lancamento}
                        onChangeText={setDataDeLancamento}
                        multiline />


                    <TextInput
                        style={styles.input}
                        placeholder="Editora:"
                        value={editora}
                        onChangeText={setEditora}
                        multiline />


                    <TextInput
                        style={styles.input}
                        placeholder="Sinopse:"
                        value={sinopse}
                        onChangeText={setSinopse}
                        multiline />


                    <TextInput
                        style={styles.input}
                        placeholder="Avaliação:"
                        value={avaliacao}
                        onChangeText={setAvaliacao}
                        multiline />


                    <TouchableOpacity style={styles.button} onPress={CadastroLivros}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>


                    <View style={styles.menuList}></View>




                    <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>


                    <View>


                    </View>
                    <View style={styles.menuList}></View>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        height: 760,
        flex: 1
    },
    container: {


        flex: 1,
    },
    inputGenero: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        width: '52%'
    },
    inputDT: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: -55,
        width: '40%',
        marginLeft: 220
    },
    menuList: {
        flexGrow: 1
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30
    },
    headerIcon: {
        width: 250,
        height: 250,
        marginBottom: -80,
        marginTop: -80
    },
    form: {
        padding: 10,
    },
    input: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 5
    },
    imageButton: {


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
        backgroundColor: '#2C7DA0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: -20
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    linhaTitle: {
        color: '#2C7DA0',
        marginBottom: -45,
        marginTop: 40
    },
    scroll: {


    }
});


export default CadastroLivros;