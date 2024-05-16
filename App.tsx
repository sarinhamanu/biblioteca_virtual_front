import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";


const Stack = createStackNavigator();


function App(): React.JSX.Element{
  return(
    <Stack.Navigator/>
  );
}


export default App;