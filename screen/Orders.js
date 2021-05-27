import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, DatePickerIOS, Image, TouchableOpacity } from 'react-native';
import { Button, CheckBox, Slider, FAB, Overlay } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Feather } from '@expo/vector-icons';
import {connect} from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

function Home(props) {
    const [currentLatitude, setCurrentLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(0);
    const [date, setDate] = useState(new Date())
    const [barbershop, setBarbershop] = useState(false);
    const [distance, setDistance] = useState(5);
    const [proList, setProList] = useState(props.professionnels.filter(e => e.statut != "independant"));
    const [color, setColor] = useState('orange');
    const [status, setStatus] = useState("independant");
    const [pin, setPin] = useState('../assets/Pin1-b.png');
    const [isMounted, setIsMounted] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

// Fetch all Professionnels from db
    useEffect(() => {
        const call = async() => { 

            const response = await fetch('http://172.17.188.14:3000/search', {
            // const response = await fetch('http://192.168.43.103:3000/search', {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `latitude=${currentLatitude}&longitude=${currentLongitude}`
            });
            const data = await response.json();
            console.log('get data from db', data)
            props.getHairdressers(data.professionnels);
            setProList(data.professionnels.filter(e => e.statut !== "salon"));
        }
        setIsMounted(true);
        call();
        return () => setIsMounted(false);
    }, []); 

    return (
        <View style={{ flex: 1  }}>
            
        </View>
    )
}

function mapStateToProps(state) {
    return { 
        professionnels : state.professionnels,
        statut: state.statut
    }
}

function mapDispatchToProps(dispatch){
    return {
    getHairdressers: (pro) => {
        dispatch({ type: 'get-hairdressers', professionnels: pro });
      },
      getStatus: (status) => {
          dispatch({ type: 'get-status', statut: status })
      },
      getDate: (date) => {
          dispatch({ type: 'get-date', date: date });
      }
    }
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Home);


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
     
});
