import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default function RecapRDV(props) {
    return (
        <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Button
                style={{marginTop: 40, display: "flex", justifyContent: "flex-start", width: "15%"}}
                title="<="
                type="solid"
                buttonStyle={{backgroundColor: "#009788"}}
                onPress={() => {
                    props.navigation.navigate('BottomNavigator', {screen: 'HairderesserList'})
                }}
            />
            <View style={styles.container}>
                <Text>Page de recap de la prestation</Text>
                <Button
                    title='Proceder au paiement'
                    onPress={() => {
                        props.navigation.navigate('paiement', {screen: 'paiement'});
                    }}
                />
            </View>
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