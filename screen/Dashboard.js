import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


function Dashboard(props) {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Button
                title='Profile'
                onPress={() => {
                    props.navigation.navigate('Profile', { screen: 'Profile' });
                }}
            />
            <Button
                title='Favorite'
                onPress={() => {
                    props.navigation.navigate('Favorite', { screen: 'Favorite' });
                }}
            />
        </View>
        
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});