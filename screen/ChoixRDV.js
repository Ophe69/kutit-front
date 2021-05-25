import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Card, ListItem,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from "react-native-datepicker";
import {connect} from "react-redux";
import date from "../reducers/date";


function ChoixRDV(props) {
    const [date, setDate] = useState(new Date())


    const horaires = ["9H00","11H00","12H00","12H30","15H00","16H30"];
    const choixHeures = horaires.map((heure, i) => {
        return(
            <Button
                style={{margin: 15}}
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title={heure}
                onPress={() => {
                    props.getHeure(heure);
                    props.navigation.navigate('RecapRDV', { screen: 'RecapRDV' });
                }}
            />
        )
    })

    var currentPrestaType = props.prestation.type;
    var currentPrestaPrice = props.prestation.prix;

    //console.log("que faire " + currentPrestaType + currentPrestaPrice)
        return (

        <View style={{alignItems: 'center', marginTop: 20}}>

            <View>
                <Card>
                    <Card.Title>Vous avez choisi un(e) {currentPrestaType}</Card.Title>
                    <Card.Divider/>
                    <View >
                        <Image
                            style={{width: 200, height: 100}}
                            source={
                                require("../assets/coupe.png")
                            }
                        />
                        <Text style={{textAlign: "center", marginTop: 5}}> cela vous coûtera {currentPrestaPrice} €</Text>
                    </View>
                </Card>
            </View>
            <View>
                <Text style={{fontSize: 35, fontWeight: "bold", margin: 20}}>Pour le {props.date}</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {choixHeures}
            </View>
            <View>
                <Text style={{fontSize: 25, fontWeight: "bold", margin: 20, color: "gray"}}>Pour une autre Date ?</Text>
            </View>

            <View>
                <DatePicker
                    customStyles={{}}
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
                    onDateChange={(value) => {
                        setDate(value)
                    }}
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
    )
}

function mapStateToProps(state) {
    return {
        prestation: state.prestation,
        heures: state.heure,
        date: state.date
    }
}

function mapDispatchToProps(dispatch){
    return{
        getHeure: (heure) => {
            dispatch({type: 'get-heure', heure: heure})
        }
    }
}

export default connect(
    mapStateToProps,
     mapDispatchToProps,
)(ChoixRDV);

