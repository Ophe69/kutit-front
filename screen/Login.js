import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
{/*             <Text>Login</Text>
            <Button
                title= "Click Here"
                onPress={() => console.log('button Login clicked')}
                /> */}
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
            <Text style={styles.text}>Déjà membre? Connecte-toi :</Text>
            <Button style={styles.buttonSignIn}
              type="clear"
              title= "Log Me In"
              //onPress={()=> console.log('SignIn button Clicked!')}
              onPress={()=> navigation.navigate('SignInScreen')}
            />
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
      fontSize: 25,
      fontWeight: 'bold',

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
    }

});
