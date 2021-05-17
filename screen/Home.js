import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, SafeAreaView, DatePickerIOS} from 'react-native';
import {Button} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'


import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const customer = <FontAwesome name="user" size={24} color="black"/>;

export default function Home(props) {
    const [currentLatitude, setCurrentLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(0);
    const [date, setDate] = useState(new Date())

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

        askPermissions();
    });


    return (
        <View style={{flex: 1}}>
            <ScrollView
                style={{flex: 1}}
            >
                <View style={{height: 20, margin: 40, marginTop: 60}}>
                    <Text style={{textAlign: 'center'}}>Bonjour Cantin, de quoi avez-vous envie aujourd'hui?</Text>
                </View>
                <View style={{height: 'auto', marginBottom: 40, alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', marginBottom: 20}}>vos disponibilites</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2021-05-01"
                        maxDate="2022-05-01"
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
                            setDate(value)
                        }}
                    />
                </View>
                <MapView
                    style={{height: '50%'}}
                    region={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={{alignself: 'center'}}
                    scrollEnabled={true}
                >
                    <Marker
                        key={"currentPos"}
                        pinColor="red"
                        // icon={customer}
                        title=""
                        description="I am here"
                        coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
                    />
                </MapView>

                <Button
                    title='Find Hairdresser'
                    onPress={() => {
                        props.navigation.navigate('HairdresserList', {screen: 'HairdresserList'});
                    }}
                />


                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae itaque vero iusto corporis ab
                    tempore autem facere vitae recusandae voluptate reiciendis eum, totam esse dolor quaerat laboriosam,
                    voluptas, praesentium omnis consequuntur modi ratione? Mollitia eos natus a quidem laudantium.
                    Reiciendis excepturi omnis alias facilis enim cum accusamus aliquam doloribus dicta, dolorum
                    exercitationem at commodi quae laboriosam consectetur repellendus minima, quisquam tempora eum
                    facere praesentium. Tempora corrupti similique, facere ipsa assumenda, ipsam atque totam illo,
                    provident sed non? Eveniet, sapiente quis vero assumenda recusandae libero similique cupiditate
                    asperiores perferendis ipsum odit nostrum itaque! Aliquam velit ratione delectus dignissimos
                    laudantium, nam similique iusto corrupti porro molestias magni? Saepe quas quibusdam voluptatum
                    animi doloremque explicabo, in adipisci voluptates reprehenderit est! Rem, possimus sit deleniti
                    illo fugit error est laboriosam ipsum maxime suscipit unde labore consectetur accusamus sapiente
                    repudiandae cum distinctio eaque. Omnis, eligendi magnam? Commodi itaque dignissimos unde eius vero
                    ipsam facilis repudiandae dolorem accusantium veritatis. Tempora tempore, temporibus aperiam iste
                    rem consectetur molestiae deleniti delectus obcaecati? Molestias, cum. Tenetur quaerat saepe esse
                    adipisci. Consequatur facilis debitis iste beatae ex ad temporibus. Distinctio molestiae hic
                    consequuntur alias temporibus, quia recusandae modi odit accusamus iste quos provident nihil dicta
                    id aliquid odio eligendi, earum vero! Beatae neque rerum esse dolores adipisci nostrum impedit
                    reprehenderit necessitatibus nobis sint aspernatur facere rem consectetur ut, laudantium vitae
                    totam, voluptas voluptates! Id aliquam pariatur nesciunt consectetur facere error, blanditiis
                    corporis, sequi consequuntur ullam doloribus? Magnam, ad distinctio alias officia labore est
                    nesciunt ex! Dignissimos incidunt eaque veniam provident possimus natus consequuntur quas molestiae
                    minima deserunt tempore ea voluptatem magni consequatur alias, similique nobis sint. Commodi alias
                    fuga optio sed amet recusandae ducimus, quae eaque quia nemo sit nam dolorem quidem debitis
                    temporibus excepturi! Pariatur expedita ex nulla hic, placeat maiores voluptates tempore facilis sit
                    harum laudantium, corrupti laborum?</Text>
            </ScrollView>
        </View>

    )
}


// const styles = StyleSheet.create({
//     container: {
//       width: '100%',
//       height: '50%',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 55
//     },

//   });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });