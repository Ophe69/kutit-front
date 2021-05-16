import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';


export default function Login(props) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title='Get an haircut'
                onPress={() => {
                    props.navigation.navigate('BottomNavigator', { screen: 'Home' });
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
