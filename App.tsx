import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import CadastroLivros from "./src/screens/CadastroLivro";
import EditarLivro from "./src/screens/EditarLivro";

import ListagemLivros from "./src/screens/ListagemLivros";

//const Stack = createStackNavigator();


function App(): React.JSX.Element{
  return(
 //< EditarLivro/>
//<CadastroLivros/>
<ListagemLivros/>
  );
}


export default App;