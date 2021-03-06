import React from 'react'
import { IP_ADDRESS } from '@env';
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from "react-redux";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {vw} from "react-native-expo-viewport-units";

function RecapRDV(props) {
    // console.log(props.prestation.type)
    // console.log(props.prestation.prix)
    // console.log(props.heures)

    var coupe = props.prestation.type;
    var prixCoupe = props.prestation.prix;
    var dateCoupe = props.date;
    var heureCoupe = props.heures;

    const addOrder = async() => {
        
        let datas = JSON.stringify({
            type: props.prestation.type,
            prix: props.prestation.prix,
            date: props.date,
            token: props.token,
            proFrontId: props.proDetails._id,
        })

        //const response = await fetch('http://172.16.190.133:3000/add-order', {
        //const response = await fetch('http://192.168.1.13:3000/add-order', {
        const response = await fetch('http://172.20.10.5:3000/add-order', {
        //const response = await fetch(`http://${IP_ADDRESS}:3000/add-order`, {
                method: 'POST',
                headers: {'Content-Type':'application/Json'},
                body: datas
        });
        const data = await response.json();
        // console.log(data.message);
    };

    return (
        <View style={{marginTop: 0}} >
            <Card>
                <Card.Title>Vous avez choisi un(e) {coupe}</Card.Title>
                <Card.Divider/>
                <View >
                    <Image
                        style={{width: 200, height: 150, alignSelf:"center"}}
                        source={
                            require("../assets/3.png")
                        }
                    />
                    <Text style={{textAlign: "center", marginTop: 5}}> Prix : {prixCoupe} €</Text>
                    <Card.Divider/>
                    <Text style={{textAlign: "center", marginTop: 5}}> Date du RDV: {dateCoupe}</Text>
                    <Card.Divider/>
                    <Text style={{textAlign: "center", marginTop: 5}}> à {heureCoupe} heure</Text>
                    <Card.Divider/>
                </View>

                <Button
                    style={styles.commandButton}
                    iconRight
                    type="clear"
                    titleStyle={{color: "white"}}
                    title="Valider votre RDV"
                    onPress={async() => {
                        props.getCoiffure(coupe, prixCoupe, dateCoupe, heureCoupe);
                        props.navigation.navigate('Home', {screen: 'Home'});
                        addOrder();
                    }}
                />
            </Card>

        </View>
    )
}

function mapStateToProps(state) {
    return {
        prestation: state.prestation,
        date: state.date,
        heures: state.heure,
        proDetails: state.proDetails,
        token: state.token
    }
}


function mapDispatchToProps(dispatch){
    return {
    getCoiffure: (coupe, prixCoupe, dateCoupe, heureCoupe) => {
            //console.log("mapDispatch", coupe, prixCoupe, dateCoupe, heureCoupe)
            dispatch({type: 'getCoupe', coupe: coupe, prixCoupe: prixCoupe, dateCoupe: dateCoupe, heureCoupe: heureCoupe});
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecapRDV);

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