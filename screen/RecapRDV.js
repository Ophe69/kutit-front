import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default function RecapRDV(props) {
    return (
        <View style={styles.container}>
            <Text>Page de recap de la commande</Text>
            <Button
                title='Proceder au paiement'
                onPress={() => {
                    props.navigation.navigate('paiement', {screen: 'paiement'});
                }}
            />
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