import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, ImageBackground, View} from 'react-native';
import { Button, Input, inputStyle, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';


function CreateAccount(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    
    return (
        <View /* source={require('../assets/images/pexels-thgusstavo-santana-2076932.jpg')} */ style={styles.container}>
                <Input
                placeholder='email'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'black'}}
                containerStyle={{ marginBottom: 25, width: '70%' }}
                inputStyle={{ marginLeft: 10 }}
                value={email}
                onChangeText={(value) => setEmail(value)}
                
                />

                <Input
                placeholder='password'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'black' }}
                containerStyle={{ marginBottom: 25, width: '70%', color: 'black' }}
                inputStyle={{ marginLeft: 10}}
                value={password}
                onChangeText={(value) => setPassword(value)}

                />
        
                
                <Button
                    title='Se connecter'
                    buttonStyle={{backgroundColor: '#354F52'}}
                    onPress={() => {console.log('email')}}
    
                />

{/*             <CheckBox style={{backgroundColor: ''}}
            center
            title='Accepter les CGV'
            checked={checked}
            onPress={() => (!setChecked)}
            /> */}

            <Button
                title='Créer un compte'
                buttonStyle={{backgroundColor: '#354F52'}}
                onPress={() => {
                    props.navigation.navigate('BottomNavigator', { screen: 'Profile' });
                }}
            />

            <Button style
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
    background: {
        color: 'white'
    },
/*     views: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems : 'center',
    } */

});

export default CreateAccount;