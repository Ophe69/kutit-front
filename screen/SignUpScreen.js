import React, {useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Platform, 
    Image,
    Dimensions,
} from 'react-native';

import { 
    CheckBox, Button
} from 'react-native-elements';

import {connect} from 'react-redux';


import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';  
import {useTheme, Avatar} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';



function SignUpScreen (props){

    const [state, setState] = useState(false);
    const [signupUserName, setSignupUserName] = useState(''); 
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPasswordConf, setSignupPasswordConf] = useState('');
    const [signupImage, setSignupImage] = useState('')

    const [secureTextEntry, setSecureTextEntry] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [listErrorsSignup, setErrorsSignup] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [signUpMessage, setSignUpMessage] = useState('');
    const [error, setError] = useState('');
    const [cvgAccepted, setCgvAccepted] = useState(false);
    const [image, setImage] = useState(null);
    const {colors} = useTheme();
    
        
        const handleSubmitSignup = async() => {

                
        
                var data = await fetch('http://172.17.188.18:3000/signup', {
                // var data = await fetch('http://192.168.43.103:3000/signup', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body:`userName=${signupUserName}&mail=${signupEmail}&password=${signupPassword}&image=${image}`
                });
                var response = await data.json();
                setIsRegistered(response.registered);
                setSignUpMessage('');
                if(response.registered == false){
                    setSignUpMessage(response.message);
                }else {
                    setSignUpMessage('');
                    props.addToken(response.token);
                    props.addPseudo(response.pseudo);
                    props.navigation.navigate('Welcome');
                }

    

        };

        useEffect(() => {
            (async () => {
                if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Accès aux photos refusé!');
                }
                }
            })();
            }, []);
    
        const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
    
            //console.log('result',result);
    
            if (!result.cancelled) {
                setImage(result.uri);
            }
            };
            //console.log('image', image)
    
        /* var uploadPicture = async () =>{
    
            //const data = await fetch('http://172.16.190.131:3000/upload', {
                const data = await fetch('http://192.168.1.13:3000/upload', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body:`image=${image}`
                    //body: `userName=${signInUserName}&password=${signInPassword}&image=${changePicture}`
                })
                const response = await data.json();
                console.log('response', response);
        } */

    


    return(
        <ScrollView style={styles.container}>
        <View >
            <View style={[styles.header, {marginTop: 55}]}>
                <Text style={styles.text_header}>Créez votre compte</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <View style={styles.containerEdit}>
                <View style={{flexDirection: 'column', marginTop: 0, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 20}}>Votre photo de profil:</Text>    
                {image && <Avatar.Image 
                    source={{ uri: image }} 
                    size={100}
                    onChangeText={(value) => {setSignupImage(value)}}
                    value={signupImage} />}
                <TouchableOpacity style={styles.commandButton} onPress={pickImage}>
                    <Text style={styles.panelButtonTitle}>
                        <FontAwesome name="camera" color={colors.text}  size={20} marginLeft={20}/>
                        Ajouter une photo
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text}  size={20} />
                    <TextInput
                        placeholder="Nom d'utlisateur"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        onChangeText={(value) => {setSignupUserName(value)}}
                        value={signupUserName}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Email"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        onChangeText={(value) => {setSignupEmail(value)}}
                        value={signupEmail}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="lock" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Password"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(value) => {setSignupPassword(value)}}
                        value={signupPassword}
                    />
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        onPress={()=>{
                            setSecureTextEntry(!secureTextEntry)
                        }}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="lock" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Confirmez Password"
                        style={styles.TextInputSignUp}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(value) => {setSignupPasswordConf(value)}}
                        value={signupPasswordConf}
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
                    title= "J'accepte les CGV"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={cvgAccepted}
                    style={styles.TextInputSignUp}
                    onPress={() => {
                        setCgvAccepted(!cvgAccepted);
                    }}
                    containerStyle={{ backgroundColor: 'transparent', border: 'none', width: '100%' }}
                    checkedColor='#52796F'
                />  
{/*                 <CheckBox
                    center
                    title="J'accepte les CGV"
                    checked={state.checked}
                    /> */}
                </View>
                
                <View style={styles.ViewTextSigninMessage}>
                    <Text style={styles.TextSigninMessage} >{signUpMessage}</Text>  
                </View>  
                <TouchableOpacity 
                    style={styles.commandButton} 
                    onPress={()=> {
                        //console.log(signupUserName, signupEmail, signupPassword, signupPasswordConf);
                        setSignupImage('');
                        setSignupUserName('');
                        setSignupEmail('');
                        setSignupPassword('');
                        setSignupPasswordConf(''); 
                        handleSubmitSignup();
                    }}>
                    <Text style={styles.panelButtonTitle}>Créer mon compte</Text>
                </TouchableOpacity>    

                <Button
                style={{marginTop: 10, display: "flex", justifyContent: "flex-start", width: 60}}
                title="skip "
                type="solid"
                buttonStyle={{backgroundColor: "#009788"}}
                onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'registered'})}
            />
            </View>
            </Animatable.View>
        </View>
        </ScrollView>
    )

};


function mapDispatchToProps(dispatch){
    return {
        addToken: (token) => {
        dispatch({ type:'add-token', token: token });
        },
        addPseudo: (pseudo) => {
            dispatch({ type:'add-pseudo', pseudo: pseudo });
        }
    }
    }

export default connect(
null,
mapDispatchToProps
)(SignUpScreen);





const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;
const width_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#354F52',
        
    },
    containerEdit:{
        flex: 1,
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
    },
    header:{
        flex: 1,
        justifyContent: 'center',
    },
    footer:{
        flex: 5,
        backgroundColor:'#CAD2C5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
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
        width: 200,
        borderRadius: 20,
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
    },
    ViewTextSigninMessage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextSigninMessage: {
        color: 'red',
        marginTop: 30,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
        },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
        },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },



    });