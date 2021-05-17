import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text} from 'react-native';
import { Button, Input, inputStyle} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';


export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    
    return (
        <ImageBackground /* source={require('../assets/images/pexels-thgusstavo-santana-2076932.jpg')} */ style={styles.container}>
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
                    onPress={() => {console.log(email)}}
    
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
    },
/*     views: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems : 'center',
    } */

});

/* function mapDispatchToProps(dispatch) {
    return {
      onSubmitPseudo: function (pseudo) {
        dispatch({ type: 'savePseudo', pseudo: pseudo })
      }
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomeScreen); */
