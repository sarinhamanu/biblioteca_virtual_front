import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HeadEdicao(): React.JSX.Element{
    return(
     <View style={styles.header}>
        <Text style={styles.headerText}>
        °˖✧ 𝔼𝕕𝕚𝕥𝕒𝕣 𝕃𝕚𝕧𝕣𝕠𝕤 ✧˖°
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

export default HeadEdicao;