import React, {useState} from 'react'
import {connect} from 'react-redux';
<<<<<<< HEAD
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Modal from 'react-native-modal'

import {Card, ListItem, Button, Icon, Overlay, Tab} from 'react-native-elements'
=======
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
>>>>>>> f54254c4975b0212f6edb058e0a2574d5df3bf63

import Icon from 'react-native-vector-icons/FontAwesome';

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

<<<<<<< HEAD
    var statutBeta = props.proDetails.statut
    var statut = statutBeta.charAt(0).toUpperCase() + statutBeta.substr(1);

    console.log(props.proDetails.prestations);
    // recupération des infos du coiffeur
    var nomRecup = props.proDetails.nom
    var prenomRecup = props.proDetails.prenom

    // Mise en majiscule des premiers caractère du nom et prénom
    var nom = nomRecup.charAt(0).toUpperCase() + nomRecup.substr(1);
    var prenom = prenomRecup.charAt(0).toUpperCase() + prenomRecup.substr(1)

    console.log(prenom + " " + nom);
=======
    console.log('details bitch', props.proDetails);
>>>>>>> f54254c4975b0212f6edb058e0a2574d5df3bf63

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
<<<<<<< HEAD
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
                            <Text style={{fontWeight: "bold", fontSize: "25px", marginBottom: 0}}>{prenom} {nom}</Text>
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
                        fontSize: "20px",
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
=======
            <View>
                <View style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}>
                    <View>
                        <Image
                            style = {{ width: 5, height: 5}}
                            source={{
                                uri: './assets/avatar.png',
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 25, marginBottom: 0}}>{props.professionnels[0].prenom} {props.professionnels[0].nom}</Text>
                        <View style={{flexDirection: 'row', justifyContent: "flex-end"}}>
                            {stars}
>>>>>>> f54254c4975b0212f6edb058e0a2574d5df3bf63
                        </View>

                    </View>
                    <View>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: "15px"
                            }}>-------------------------------------------------</Text>

<<<<<<< HEAD
                        <Text style={{margin: 10, fontSize: "25px", textAlign: "center"}}>Choisissez votre
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
                                buttonStyle={{backgroundColor: "#009788", display: "inline"}}
                                onPress={() => {
                                    props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                                }}/>
                            <Button
                                title="shampoing - 23€"
                                type="solid"
                                buttonStyle={{backgroundColor: "#009788", display: "inline"}}
                                onPress={() => {
                                    props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                                }}/>
                        </View>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: "15px"
                            }}>-------------------------------------------------</Text>
                    </View>
                    <View>
                        <Text style={{margin: 10, fontSize: "20px", textAlign: "center"}}>Ce que les autres ont
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
=======
                </View>
                <View style={{
                    flexDirection: "row",
                    fontSize: 20,
                    justifyContent: "space-between",
                    margin: 15,
                }}>
                    <Text style={{fontSize: 20}}>portFolio </Text>
                    <Text style={{fontSize: 20}}>Contact </Text>
                </View>
                <View>
                    <Text style={{margin: 10, fontSize: 15}}>Choisissez votre prestation</Text>
                    <View Style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <Button
                            title="decapage - 27€"
                            type="solid"
                            buttonStyle={{backgroundColor: "#009788" }}
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
                    <Text style={{margin: 10, fontSize: 15}}>-------------------------------------------------</Text>
>>>>>>> f54254c4975b0212f6edb058e0a2574d5df3bf63
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
    null
<<<<<<< HEAD
)(HairdresserDetails);

const styles = StyleSheet.create({
    scrollview: {
        flex: .9,
        marginTop: -10
    },
});
=======
  )(HairdresserDetails);
>>>>>>> f54254c4975b0212f6edb058e0a2574d5df3bf63
