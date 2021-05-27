
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';


function Welcome({pseudo, token, navigation}) {
    //console.log('log de props token', token);
    

    setTimeout(() => {
        navigation.navigate('BottomNavigator', { screen: 'Home'});
    }, 1500);
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, margin: 20, marginTop: -100}}>Bonjour {pseudo.charAt(0).toUpperCase() + pseudo.substring(1).toLowerCase()},</Text>
            <Text style={{fontSize: 20}}>De quoi avez-vous envie aujourd'hui?</Text>
        </View>
        
    )
}

function mapStateToProps(state) {
    return { 
      token: state.token,
      pseudo: state.pseudo 
    }
  }
  
  export default connect(
      mapStateToProps, 
      null
  )(Welcome);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});