import React, {useState} from 'react'
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Modal from 'react-native-modal'

import {Card, ListItem, Button, Icon, Overlay, Tab} from 'react-native-elements'


function HairdresserDetails(props) {

    const [review, setReview] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);





    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const stars = [1, 2, 3, 4, 5].map((star, i) => {
        if (review > i) {
            return (
                <FontAwesome
                    style={{display: "flex", flexDirection: "row"}}
                    name="star"
                    size={24}
                    value={i}
                    onPress={() => {
                        setReview(i + 1);
                    }}
                    color="black"
                    style={review > i ? {color: '#f1c40f'} : null}
                />)
        } else {
            return (
                <FontAwesome
                    style={{display: "flex", flexDirection: "row"}}
                    name="star-o"
                    size={24}
                    color="black"
                    value={i}
                    onPress={() => {
                        setReview(i + 1);
                    }}
                />)
        }
    })

    var statutBeta = props.proDetails.statut
    var statut = statutBeta.charAt(0).toUpperCase() + statutBeta.substr(1);

    console.log(props.professionnels);
    // recupération des infos du coiffeur
    var nomRecup = props.proDetails.nom
    var prenomRecup = props.proDetails.prenom

    // Mise en majiscule des premiers caractère du nom et prénom
    var nom = nomRecup.charAt(0).toUpperCase() + nomRecup.substr(1);
    var prenom = prenomRecup.charAt(0).toUpperCase() + prenomRecup.substr(1)

        //console.log(prenom + " " + nom);

    console.log('console pro details', props.proDetails);

    return (
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', margin: "1.5%"}}>
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
            </View>
            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={{alignItems: 'center'}}
            >
                <View>
                    <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
                        <View>
                            <Image
                                style={{width: 100, height: 100}}
                                source={
                                    require("../assets/profil.png")
                                }
                            />

                        </View>
                        <View>
                            <Text style={{fontWeight: "bold", fontSize: 25, marginBottom: 0}}>{prenom} {nom}</Text>
                            <View style={{flexDirection: 'row', justifyContent: "flex-end", marginTop: 10}}>
                                {stars}
                            </View>
                            <View
                                style={(statut == "Salon" ? {backgroundColor: 'green'} : {backgroundColor: 'yellow'})}>
                                <Text style={{marginTop: 10, textAlign: "center", fontWeight: "bold"}}>{statut}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        fontSize: 20,
                        justifyContent: "space-evenly",
                        margin: 15,
                    }}>

                        <View style={{display: "flex", flexDirection:"row"}}>
                            <View style={{margin: 10}}>
                                <Button title="Contacts" onPress={toggleModal} />
                                <Modal isVisible={isModalVisible}>
                                    <View style={{flex: 1}}>
                                        <Text>Hello!</Text>
                                        <Button title="Fermer Contacts" onPress={toggleModal} />
                                    </View>
                                </Modal>
                            </View>

                            <View style={{ margin: 10}}>
                                <Button title="Portfolio" onPress={toggleModal} />

                                <Modal isVisible={isModalVisible}>
                                    <View style={{flex: 1}}>
                                        <Text>Hello!</Text>

                                        <Button title="Fermer Portfolio" onPress={toggleModal} />
                                    </View>
                                </Modal>
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15
                            }}>-------------------------------------------------</Text>


                        <Text style={{margin: 10, fontSize: 25, textAlign: "center"}}>Choisissez votre
                            prestation</Text>
                        <View Style={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <Button
                                title="decapage - 27€"
                                type="solid"
                                buttonStyle={{backgroundColor: "#009788"}}
                                onPress={() => {
                                    props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                                }}/>
                            <Button
                                title="shampoing - 23€"
                                type="solid"
                                buttonStyle={{backgroundColor: "#009788"}}
                                onPress={() => {
                                    props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                                }}/>
                        </View>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15
                            }}>-------------------------------------------------</Text>
                    </View>
                    <View>
                        <Text style={{margin: 10, fontSize: 20, textAlign: "center"}}>Ce que les autres ont
                            pensé</Text>
                        <Card>
                            <Card.Title>Fleury nichon</Card.Title>
                            <Card.Divider/>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Image
                                    style={{width: 70, height: 60}}
                                    //resizeMode="cover"
                                    source={
                                        require("../assets/avatar.png")
                                    }
                                />
                                <View>
                                    <Text style={{width: vw(60)}}>Très bon coiffeur, professionnel et pointuel</Text>
                                    <View style={{display: "flex", flexDirection: "row"}}>{stars}</View>
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title>Fleury nichon</Card.Title>
                            <Card.Divider/>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Image
                                    style={{width: 70, height: 60}}
                                    //resizeMode="cover"
                                    source={
                                        require("../assets/avatar.png")
                                    }
                                />
                                <View>
                                    <Text style={{width: vw(60)}}>Très bon coiffeur, professionnel et pointuel</Text>
                                    <View style={{display: "flex", flexDirection: "row"}}>{stars}</View>
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title>Fleury nichon</Card.Title>
                            <Card.Divider/>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Image
                                    style={{width: 70, height: 60}}
                                    //resizeMode="cover"
                                    source={
                                        require("../assets/avatar.png")
                                    }
                                />
                                <View>
                                    <Text style={{width: vw(60)}}>Très bon coiffeur, professionnel et pointuel</Text>
                                    <View style={{display: "flex", flexDirection: "row"}}>{stars}</View>
                                </View>
                            </View>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

function mapStateToProps(state) {
    return { 
        professionnels : state.professionnels,
        proDetails: state.proDetails
    }
}
  
  export default connect( 
    mapStateToProps,
      null,
)(HairdresserDetails);

const styles = StyleSheet.create({
    scrollview: {
        flex: .9,
        marginTop: -10
    },
});