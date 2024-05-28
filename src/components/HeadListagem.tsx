import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HeadListagem(): React.JSX.Element{
    return(
     <View style={styles.header}>
        <Text style={styles.headerText}>
        °˖✧ 𝕃𝕚𝕤𝕥𝕒𝕘𝕖𝕞 𝕕𝕖 𝕃𝕚𝕧𝕣𝕠𝕤 ✧˖°
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
        marginTop: -240
    },
    headerText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#2C7DA0'
    }
});

export default HeadListagem;