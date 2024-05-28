import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Head(): React.JSX.Element{
    return(
     <View style={styles.header}>
        <Text style={styles.headerText}>
        °˖✧ ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕠 𝕕𝕖 𝕃𝕚𝕧𝕣𝕠𝕤 ✧˖°
        </Text>
     </View>
    );
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        paddingVertical:10,
        alignItems:'center',
        marginTop: 35
    },
    headerText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#2C7DA0'
    }
});


export default Head;