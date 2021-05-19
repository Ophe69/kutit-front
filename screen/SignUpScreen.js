import React, {useState} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';

import { 
    Button,
    CheckBox
 } from 'react-native-elements';


import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';  



const SignUpScreen = ({navigation}) =>{

    const [state, setState] = useState(false);
    const [signupUserName, setSignupUserName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPasswordConf, setSignupPasswordConf] = useState('');

    const [secureTextEntry, setSecureTextEntry] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [listErrorsSignup, setErrorsSignup] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    
    const onSubmitClick = () =>{
        if(signupUserName !== '' && signupEmail !== '' && signupPassword !== ''){
            setIsLogin(true)
        }else {
            setError('Merci de ne pas laisser de champs vides')
            console.log(error)
        }
    }

    if(isLogin){
        navigation.navigate('BottomNavigator', { screen: 'Home' })
    }
    
    
    var handleSubmitSignup = async () => {

        const data = await fetch('http://172.16.190.142:3000/users/sign-up',  {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `userName=${signupUserName}&mail=${signupEmail}&password=${signupPassword}`
        })

        const body = await data.json()

        if(body.result == true){
            props.addToken(body.token)
            setUserExists(true)
            
        } else {
            setErrorsSignup(body.error)
        }
        }
    


    return(
        <View style={styles.container}>
            <View style={[styles.header, {marginTop: 55}]}>
                <Text style={styles.text_header}>Créez votre compte</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <View style={styles.actionSignUp}>
                    <TextInput
                        placeholder="Nom d'utlisateur"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        onChangeText={(value) => {setSignupUserName(value)}}
                    />
                </View>
                <View style={styles.actionSignUp}>
                    <TextInput
                        placeholder="Email"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        onChangeText={(value) => {setSignupEmail(value)}}
                    />
                </View>
                <View style={styles.actionSignUp}>
                    <TextInput
                        placeholder="Password"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(value) => {setSignupPassword(value)}}
                    />
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                </View>

                <View style={styles.actionSignUp}>
                    <TextInput
                        placeholder="Confirmez Password"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(value) => {setSignupPasswordConf(value)}}
                    />
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                </View>
                
                <View>
                <CheckBox
                    center
                    title="J'accepte les CGV"
                    checked={state.checked}
                    />
                </View>    
                    <Button style={styles.buttonSign}
                        type="clear"
                        title= "je créé mon compte"

                        onPress={()=> {
                            console.log(signupUserName, signupEmail, signupPassword);
                            setSignupUserName('');
                            setSignupEmail('');
                            setSignupPassword('');
                            setSignupPasswordConf('');
                            handleSubmitSignup();
                            onSubmitClick();
                            /* navigation.navigate('BottomNavigator', { screen: 'Home'}) */
                        }}
                    />

                <Button
                style={{marginTop: 40, display: "flex", justifyContent: "flex-start", width: "12%" }}
                title="<="
                type="solid"
                buttonStyle={{backgroundColor: "#009788"}}
                onPress={() => navigation.navigate('BottomNavigator', {screen: 'Login'})}
            />
            </Animatable.View>
        </View>
    );

};

export default SignUpScreen;

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
        height: 40,
        backgroundColor: '#354F52',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 90,
        marginTop: 30,
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
    TextInputSignUp: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold'
    },
    actionSignUp: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#354F52',
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 5,
        paddingRight: 10
    }, 
    cgv: {
        backgroundColor: '#CAD2C5',
    }


    });