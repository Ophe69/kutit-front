import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Favorite() {
    return (
        <View style={styles.container}>
            <Text>Favorite</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});