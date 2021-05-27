import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Card, ListItem,} from 'react-native-elements';
import {connect} from "react-redux";


function ChoixRDV(props) {

    const horaires = ["9H00","11H00","12H00","12H30","15H00","16H30"];
    const choixHeures = horaires.map((heure, i) => {
        return(
            <Button
                type="clear"
                style={styles.commandButton}
                title={heure}
                titleStyle={{color: "white"}}
                onPress={() => {
                    props.getHeure(heure);
                    props.navigation.navigate('RecapRDV', { screen: 'RecapRDV' });
                }}
            />
        )
    })

    var currentPrestaType = props.prestation.type;
    var currentPrestaPrice = props.prestation.prix;

    // console.log("que faire " + currentPrestaType + currentPrestaPrice)
        return (

        <View style={{alignItems: 'center', marginTop: 20, margin: "1.5%"}}>

            <View>
                <Card>
                    <Card.Title>Votre choix : {currentPrestaType}</Card.Title>
                    <Card.Divider/>
                    <View >
                        <Image
                            style={{width: 200, height: 150, alignSelf:"center"}}
                            source={
                                require("../assets/3.png")
                            }
                        />
                        <Text style={{textAlign: "center", marginTop: 5}}>Prix : {currentPrestaPrice} €</Text>
                    </View>
                </Card>
            </View>
            <View>
                <Text style={{fontSize: 15, margin: 20}}>Date : {props.date}</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {choixHeures}
            </View>
            <View>
                <Text style={{fontSize: 15, fontWeight: "bold", margin: 10, color: "gray"}}>Vous souhaitez changer de Date ?</Text>
            </View>

            <View>

            </View>
            <View>
                <Button
                    style={styles.commandButton}
                    type="clear"
                    title="Revenir au calendrier"
                    titleStyle={{color: "white"}}
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

const styles = StyleSheet.create({
    commandButton: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 20,
    }
});