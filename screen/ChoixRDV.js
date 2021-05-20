import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function ChoixRDV(props) {
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

            <View>
                <Text style={{textAlign: "center"}}>Page de recap de la prestation</Text>

            </View>
            <Button
                title='Proceder au paiement'
                onPress={() => {
                    props.navigation.navigate('paiement', {screen: 'paiement'});
                }}
            />
        </View>
    )
}

