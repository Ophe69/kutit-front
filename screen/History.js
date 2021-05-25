import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


function History() {
    return (
        <View style={styles.container}>
            <Text>Historique des commandes</Text>
        </View>
        
    )
}

export default History;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});