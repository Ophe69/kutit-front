import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from "react-redux";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

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

        console.log('datas sent to back', datas)
        const response = await fetch('http://172.16.190.133:3000/add-order', {
        //const response = await fetch('http://192.168.43.103:3000/add-order', {
                method: 'POST',
                headers: {'Content-Type':'application/Json'},
                body: datas
        });
        const data = await response.json();
        console.log(data.message);
    };

    return (
        <View style={{marginTop: 30}} >
            <Card>
                <Card.Title>Vous avez choisi un(e) {coupe}</Card.Title>
                <Card.Divider/>
                <View >
                    <Image
                        style={{width: 200, height: 200, marginBottom: 10, display: "flex", flexDirection: "row", alignSelf: "center"}}
                        source={
                            require("../assets/coupe.png")
                        }
                    />
                    <Text style={{textAlign: "center", marginTop: 5}}> cela vous coûtera {prixCoupe} €</Text>
                    <Card.Divider/>
                    <Text style={{textAlign: "center", marginTop: 5}}> Votre Rdv sera pour le {dateCoupe}</Text>
                    <Card.Divider/>
                    <Text style={{textAlign: "center", marginTop: 5}}> Votre coiffure sera à {heureCoupe}</Text>
                    <Card.Divider/>
                </View>

                <Button
                    style={{margin: 10}}
                    iconRight
                    title="Valider votre RDV"
                    onPress={async() => {
                        props.getCoiffure(coupe, prixCoupe, dateCoupe, heureCoupe);
                        // props.navigation.navigate('RecapRDV', {screen: 'RecapRDV'});
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
            console.log("mapDispatch", coupe, prixCoupe, dateCoupe, heureCoupe)
            dispatch({type: 'getCoupe', coupe: coupe, prixCoupe: prixCoupe, dateCoupe: dateCoupe, heureCoupe: heureCoupe});
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecapRDV);
