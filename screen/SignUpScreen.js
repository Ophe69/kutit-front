import React from 'react';
import {
    View, 
    Text,
    Button, 
    StyleSheet
} from 'react-native';

const SignUpScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>SignUpScreen</Text>
            <Button
                title= "Click Here"
                onPress={() => console.log('button Sign Up clicked')}
                />
        </View>
    );

};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

});