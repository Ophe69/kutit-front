import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {connect} from "react-redux";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function RecapRDV(props) {
    // console.log(props.prestation.type)
    // console.log(props.prestation.prix)
    // console.log(props.heures)

    return (
        <View>
            <Card>
                <Card.Title>Vous avez choisi un(e) {props.prestation.type}</Card.Title>
                <Card.Divider/>
                <View >
                    <Image
                        style={{width: 200, height: 100}}
                        source={
                            require("../assets/coupe.png")
                        }
                    />
                    <Text style={{textAlign: "center", marginTop: 5}}> cela vous coûtera {props.prestation.prix} €</Text>
                    <Text style={{textAlign: "center", marginTop: 5}}> Votre Rdv sera pour le 02/06/2021</Text>
                    <Text style={{textAlign: "center", marginTop: 5}}> Votre coiffure sera à {props.heures}</Text>
                </View>
            </Card>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        prestation: state.prestation,
        heures: state.heure
    }
}


/*function mapDispatchToProps(dispatch){
    return{
        getHeure: (heure) => {
            dispatch({type: 'get-heure', heure: heure})
        }
    }
}
 */

export default connect(
    mapStateToProps,
    // mapDispatchToProps,
)(RecapRDV);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});