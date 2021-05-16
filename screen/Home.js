import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title='Find Hairdresser'
                onPress={() => {
                    props.navigation.navigate('HairdresserList', { screen: 'HairdresserList' });
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