import React, {useState} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TextInput, 
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = (props) =>{

    const [signInUserName, setSignInUserName] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signInMessage, setSignInMessage] = useState('');

    const [secureTextEntry, setSecureTextEntry] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [passwordOK, setPasswordOk] = useState(false);
    const [userExists, setUserExists] = useState(false);


    var handleSubmitSignIn = async () => {
            
            const data = await fetch('http://172.16.190.137:3000/signin', {
            //const data = await fetch('http://192.168.1.13:3000/signin', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `userName=${signInUserName}&password=${signInPassword}`
            })
            const response = await data.json();
            //console.log('response', response);
            setUserExists(response.exist);
            setSignInMessage(response.message);
            //console.log('signInMessage', signInMessage);
            if(response.login == false){
                setSignInMessage(response.message);
            }else{
                setIsLogin(response.exist);
                setPasswordOk(response.passwordOK);
                props.addToken(response.token);
                props.addPseudo(response.pseudo);

                props.navigation.navigate('Welcome');
            }
/*             if (isLogin && passwordOK){
                navigation.navigate('BottomNavigator', { screen: 'Home'})
            } */
            
        
};



    return(
        <View style={styles.container}>
            <View style={[styles.header, {marginTop: 55}]}>
                <Text style={styles.text_header}>Bienvenue!</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color='#354F52'
                            size={20}
                        />
                        <TextInput
                        placeholder="Nom d'utlisateur"
                        style={styles.TextInput}
                        autoCapitalize="none"
                        onChangeText={(value) => {setSignInUserName(value)}}
                        value={signInUserName}
                    />
                    </View>
                <Text style={styles.text_footer}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color='#354F52'
                            size={25}
                        />
                        <TextInput
                            placeholder="Votre password"
                            style={styles.TextInput}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(value) => {setSignInPassword(value)}}
                            value={signInPassword}
                        />
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                    </View>

                    <View style={styles.ViewTextSigninMessage}>
                        <Text style={styles.TextSigninMessage} >{signInMessage}</Text>  
                    </View>  

                    <TouchableOpacity style={styles.commandButton}
                        onPress={()=> {
                            console.log(signInUserName, signInPassword);
                            setSignInUserName('');
                            setSignInPassword('');
                            handleSubmitSignIn();

                        }}>
                        <Text style={styles.panelButtonTitle}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.commandButton}
                        onPress={()=> props.navigation.navigate('SignUpScreen')}>
                        <Text style={styles.panelButtonTitle}>Créer un compte</Text>
                    </TouchableOpacity>
                
            </Animatable.View>
        </View>
    );

};


function mapDispatchToProps(dispatch){
    return {
    addToken: (token) => {
        dispatch({ type:'add-token', token: token });
      },
    addPseudo: (pseudo) => {
        dispatch({ type:'add-pseudo', pseudo: pseudo });
    },
    addImage: (image) => {
        dispatch({ type:'add-image', image: image });
    }
    }
  }
  
export default connect(
null,
mapDispatchToProps
)(SignInScreen);


const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;
const width_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#354F52',
        
    },
    header:{
        flex: 1,
        justifyContent: 'center',
    },
    footer:{
        flex: 3,
        backgroundColor:'#CAD2C5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: width_logo,
        height: height_logo
    },
    text: {
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 'bold',

    },
    text_header: {
        marginBottom: 30,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 30
    },
    text_footer:{
        fontSize: 20,
    },
    buttonSign: {
        flexDirection: 'row', 
        height: 50,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#354F52',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
        elevation:3,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#354F52',
        paddingBottom: 5
    },
    TextInput:{
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
        color: 'black'
    },
    error: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        color: 'red',
    },
    ViewTextSigninMessage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextSigninMessage: {
        color: 'red',
        marginTop: 20,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },

    });