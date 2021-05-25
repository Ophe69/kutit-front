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


import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const customer = <FontAwesome name="user" size={24} color="black"/>;
const filter = <MaterialIcons name="filter-list" size={24} color="black" />
const calendarIcon = <Entypo name="calendar" size={24} color="black" />

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

    // const [markerPro, setMarkerPro] = useState(proList.map((pro, i) => {
    //     return <Marker key={i} pinColor={color} coordinate={{ latitude: pro.latitude, longitude: pro.longitude }}
    //       prenom={pro.prenom}
    //       nom={pro.nom}
    //     />
    //   }));

// Geoloc Enabled

    console.log("Today's date", new Date().toLocaleDateString())
    useEffect(() => {
        async function askPermissions() {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted') {
                Location.watchPositionAsync({distanceInterval: 10},
                    (location) => {
                        setCurrentLatitude(location.coords.latitude)
                        setCurrentLongitude(location.coords.longitude);
                    }
                );
            }
        }
        setIsMounted(true);
        askPermissions();
        return () => setIsMounted(false);
    }, []);


// Fetch all Professionnels from db
    useEffect(() => {
        const call = async() => { //call ici = handleSubmitSignup la bas

            const response = await fetch('http://172.16.189.163:3000/search', {
           // const response = await fetch('http://192.168.1.3:3000/search', {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `latitude=${currentLatitude}&longitude=${currentLongitude}`
            });
            const data = await response.json();
            props.getHairdressers(data.professionnels);
            setProList(data.professionnels.filter(e => e.statut !== "salon"));
        }
        setIsMounted(true);
        call();
        return () => setIsMounted(false);
    }, []); 

// Get independant or salon 
    useEffect(() => {
        if(!barbershop){
            const freelanceCopy = props.professionnels.filter(e => e.statut !== "salon");
            setProList(freelanceCopy);
            props.getStatus("independant")

        } else {
            const barbershopCopy = props.professionnels.filter(e => e.statut !== "independant");
            setProList(barbershopCopy);
            props.getStatus("salon");
        }
        setIsMounted(true);
        return () => setIsMounted(false);  
    }, [barbershop]);


    let markerPro = proList.map((pro, i) => {
        return (<Marker
            key={i}
            coordinate={{ latitude: pro.latitude, longitude: pro.longitude }}
            image={ barbershop ? require('../assets/Pin2-b.png') : require('../assets/Pin1-b.png')}
            
            // anchor={{ x: 0.5, y: 1 }}
            // centerOffset={{ x: 0.5, y: 1 }}
            // onPress={e => onPressMarker(e, info.id, { id: info._id, title: info.name, address: info.address, sport: info.sport, description: info.description, image: info.picture })}
        />)
    });


    if(isMounted){
    return (
        <View style={{ flex: 1  }}>
            
            <Overlay
                isVisible={isVisible}
                onBackdropPress={() => { setIsVisible(false) }}
            >
            <DatePicker
                    customStyles={{
                       // dateTouchBody: {borderColor:"red", borderWidth:3},
                        //dateInput: {borderColor:"green", borderWidth:1},
                        //dateTouchBody:{ borderColor:"geen" }
                    }}
                    style={{width: 200}}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    minDate="01-05-2021"
                    maxDate="01-05-2022"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(value) => {
                        setDate(value);
                        setIsVisible(false);
                        props.getDate(value);
                    }}
                    // style={{ color: '#52796F' }}
                    format='DD-MM-YYYY'
                    // onPressDate={}
                    // onPressCancel={}
                /> 
            </Overlay>
            <MapView
                style={{ height: '100%' }}
                region={{
                latitude: currentLatitude,
                longitude: currentLongitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                customMapStyle={{ alignself: 'center'}}
                scrollEnabled={true}
            >
                
                
                <Marker
                    key={"currentPos"}
                    pinColor="red"
                    title=""
                    description="I am here"
                    coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
                />
                {markerPro}
            
                
            </MapView>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <FAB
                        style={styles.calendarStyle}
                        small
                        color={'#84A98C90'}
                        title="disponibiltés" titleStyle={{ color: '#000000', fontFamily: 'Nunito_400Regular' }}
                        icon={calendarIcon} 
                        onPress={() => {
                            setIsVisible(true);
                        }}
                    >
                    </FAB>
                    <FAB
                        disabled={isDisabled} //inverse le bouton
                        style={styles.freel}
                        small
                        color={'#84A98C90'}
                        title="chez soi" titleStyle={{ color: '#000000', fontFamily: 'Nunito_400Regular' }}
                        icon={filter}   
                        onPress={() => {
                            setBarbershop(!barbershop);
                            setIsDisabled(!isDisabled);
                        }}
                    />
                    <FAB
                        disabled={!isDisabled}
                        style={styles.bs}
                        small
                        onPress={() => {
                            setBarbershop(!barbershop);
                            setIsDisabled(!isDisabled);
                        }}
                        color={'#84A98C80'}
                        title="au salon" titleStyle={{ color: '#000000', fontFamily: 'Nunito_400Regular' }}
                        icon={filter}
                        // visible={barbershop ? false : true}
                    />
                    <FAB
                        style={styles.findButton}
                        small
                        onPress={() => {
                            props.navigation.navigate('HairdresserList', { screen: 'HairdresserList' });
                        }}
                        color={'#52796F95'}
                        title="trouver" titleStyle={{ color: '#000000', fontFamily: 'Nunito_400Regular' }}
                        icon={filter}
                        // visible={barbershop ? false : true}
                    />
                </View>
        </View>

    )}
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
    bs: {
        position: 'absolute',
        fontSize: 10,
        margin: 16,
        right: 40, 
        bottom: 80
    },
    freel: {
        position: 'absolute',
        margin: 16,
        left: 40,
        bottom: 80
    },
    calendarStyle: {
        position: 'absolute',
        margin: 16,
        bottom: vh(70)
    },
    findButton: {
        position: 'absolute',
        margin: 16,
        // right: 40,
        bottom: 10
    }
});
