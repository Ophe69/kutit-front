import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground} from 'react-native';
import { Button, Input, inputStyle, InputText, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';


export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    
    return (
        <ImageBackground /* source={require('../assets/images/pexels-thgusstavo-santana-2076932.jpg')} */ style={styles.container}>
            <Input
            value={email}
            placeholder='email'
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'black'}}
            containerStyle={{ marginBottom: 25, width: '70%' }}
            inputStyle={{ marginLeft: 10 }}
            
            />

            <Input
            value={password}
            placeholder='password'
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'black' }}
            containerStyle={{ marginBottom: 25, width: '70%', color: 'black' }}
            inputContainerStyle={{color: 'black'}}
            inputStyle={{ marginLeft: 10}}
            />
    
            
            <Button
                title='Se connecter'
                buttonStyle={{backgroundColor: '#354F52'}}
/*                 onPress={() => {
                    props.navigation.navigate('BottomNavigator', { screen: 'Home' });
                }{e => {setEmail(e.target.value); console.log('email')}}
            } */
            />

            <CheckBox style={{backgroundColor: ''}}
            center
            title='Accepter les CGV'
            /* checked={state.checked}
            onPress={() => this.setState({checked: !this.state.checked})} */
            />

            <Button
                title='Créer un compte'
                buttonStyle={{backgroundColor: '#354F52'}}
                onPress={() => {
                    props.navigation.navigate('BottomNavigator', { screen: 'Profile' });
                }}
            />

            <Button
            type="outline"
            icon={
                <Icon style={{ marginRight: 20, marginLeft: 20, color: "blue" }}
                name="facebook"
                size={15}
                color="white"
                
                />
            }
            title="Se connecter avec Facebook"
            />
        </ImageBackground>
        
    )
            }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    background: {
        color: 'white'
    }
});
