import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>

          <View style={styles.header}>
            <Image
            source={require('../assets/man-beard.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
          </View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"

          >
            <Text style={styles.text}>Envie de te faire beau?</Text>
            <Text style={styles.text2}>Où tu veux et Quand tu veux!</Text>

            <TouchableOpacity style={styles.commandButton}
              onPress={()=> navigation.navigate('SignInScreen')}>
                    <Text style={styles.panelButtonTitle}>C'est parti !</Text>
            </TouchableOpacity>  


          </Animatable.View>
        </View>
    );

};

export default Login;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;
const width_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#354F52',
        
    },
    header:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer:{
      flex: 1,
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
      fontSize: 30,
      fontWeight: 'bold',

    },
    text2: {
      marginTop: -10,
      marginBottom: 30,
      fontSize: 20,
      fontWeight: 'bold',

    },
    buttonSign: {
      flexDirection: 'row', 
      height: 50,
      width: 200,
      borderRadius: 20,
      backgroundColor: '#354F52',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 80,
      marginTop: 40,
      elevation:3,
    }, 
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#354F52',
      alignItems: 'center',
      marginTop: 35,
      marginHorizontal: 20,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },

});
