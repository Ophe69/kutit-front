import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenue!</Text>
            </View>
                {/* <Button
                    title= "Click Here"
                    onPress={() => console.log('button Sign In clicked')}
                    /> */}
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color='white'
                            size={20}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.TextInput}
                        />
                    </View>



                <Button style={styles.buttonSignIn}
                type="clear"
                title= "Se connecter"
                //onPress={()=> console.log('SignIn button Clicked!')}
                onPress={()=> navigation.navigate('SignInScreen')}
                />
            </Animatable.View>
        </View>
    );

};

export default SignInScreen;

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
    buttonSignIn: {
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

    },
    TextInput:{
        
    }

    });