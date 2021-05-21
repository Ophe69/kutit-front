import React, { useState, useEffect } from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from "react-native-datepicker";



export default function ChoixRDV(props) {
    const [date, setDate] = useState(new Date())

    return (
        <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Button
                style={{marginTop: 40, display: "flex", justifyContent: "flex-start", width: "15%"}}
                title="<="
                type="solid"
                buttonStyle={{backgroundColor: "#009788"}}
                onPress={() => {
                    props.navigation.navigate('BottomNavigator', {screen: 'HairderesserList'})
                }}
            />

            <View style={{alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 35, fontWeight: "bold", margin: 20}}>Ajourd'hui ?</Text>
                </View>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="9H00"
                    />
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="11H00"
                    />
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="12H00"
                    />
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="12H30"
                    />
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="15H00"
                    />
                    <Button
                        style={{margin: 15}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        title="18H00"
                    />
                </View>
                <View>
                    <Text style={{fontSize: 25, fontWeight: "bold", margin: 20, color: "gray"}}>Pour une autre Date ?</Text>
                </View>

                <View>
                    <DatePicker
                        customStyles={{
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
                        }}
                        onDateChange={(value) => {setDate(value)}}
                        format='DD-MM-YYYY'
                    />
                </View>
                <View>
                    <Text style={{margin: 10}}>c'est tout bon ? </Text>
                    <Button
                        style={{margin: 10}}
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        iconRight
                        title="Valider  "
                        onPress={() => {
                            props.navigation.navigate('BottomNavigator', {screen: 'RecapRDV'})
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

