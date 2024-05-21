import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import CadastroLivros from "./src/screens/CadastroLivro";
import EditarLivro from "./src/screens/EditarLivro";
import PesquisarLivro from "./src/screens/PesquisaLivro";

//const Stack = createStackNavigator();


function App(): React.JSX.Element{
  return(
    <PesquisarLivro/>
  );
}


export default App;