import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function HairdresserList(props) {
    return (
        <View style={styles.container}>
            <Text>HairdresserList</Text>
            <Button
                title='Details'
                onPress={() => {
                    props.navigation.navigate('HairdresserDetails', { screen: 'HairdresserDetails' });
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