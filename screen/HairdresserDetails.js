import React, {useState} from 'react'
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';

import {Overlay, Tab, LinearProgress, PricingCard, Card, ListItem, Button, Icon, Input} from 'react-native-elements'


function HairdresserDetails(props) {

    const [review, setReview] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisibleReviews, setModalVisibleReviews] = useState(false);
    const [reviews, setReviews] = useState([]);

    const [pseudo, setPeudo] = useState('')
    const [contenu, setContenu] = useState('');
    const [disabled, setDisabled] = useState(true);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };
    const toggleReviews = () => {
        setModalVisibleReviews(!isModalVisibleReviews);
        //setDisabled(!disabled);
    };

    // var reviews = [];
    const recupReviews = () => {
        setReviews([...reviews, {pseudo: pseudo, contenu: contenu}])
        //setDisabled(!disabled);
        //console.log("mon pseudo c'est " + pseudo + ", et mon review c'est : " + contenu)
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


    // recupération des infos du coiffeur
    var nomRecup = props.proDetails.nom
    var prenomRecup = props.proDetails.prenom
    var email = props.proDetails.mail


    // Mise en majiscule des premiers caractère du nom et prénom
    var nom = nomRecup.charAt(0).toUpperCase() + nomRecup.substr(1);
    var prenom = prenomRecup.charAt(0).toUpperCase() + prenomRecup.substr(1)


    var prestations = props.proDetails.prestations
    const parcours = prestations.map((prestation, i) => {
        var coupe = prestation.type;
        var bestCoupe = coupe.charAt(0).toUpperCase() + coupe.substr(1)
        return (
            <Card style={{borderRadius: 10}}>
                <Card.Title>{bestCoupe} pour {prestation.prix} €</Card.Title>
                <Card.Divider/>

                <Button style={styles.commandButton}
                        type="clear"
                        title='Réserver'
                        titleStyle={{color: "white"}}
                        onPress={() => {
                            props.getPrestation(prestation);
                            props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                        }}
                />

            </Card>
        )
    })


    // <Text>{prestation.type} pour => {prestation.prix} €</Text>


    return (
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', margin: "1.5%", marginTop: 15}}>
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
                            <View style={{flexDirection: 'row', justifyContent: "center", margin: 10}}>
                                {stars}
                            </View>
                            <View
                                style={(statut == "Salon" ? {backgroundColor: 'brown', borderRadius: 10} : {backgroundColor: 'gray', borderRadius: 10})}>
                                <Text style={{margin: 10, textAlign: "center", fontWeight: "bold" }}>{statut}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        fontSize: 20,
                        justifyContent: "space-evenly",
                        margin: 15,
                    }}>

                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Text style={{margin: 2}}>

                                <Button style={styles.commandButton}
                                        buttonStyle={{width: vw(25)}}
                                        type="clear"
                                        title='Contact'
                                        titleStyle={{color: "white"}}
                                        onPress={toggleModal}
                                />
                            </Text>

                            <Text style={{margin: 2}}>

                                <Button style={styles.commandButton}
                                        buttonStyle={{width: vw(25)}}
                                        type="clear"
                                        title='Portfolio'
                                        titleStyle={{color: "white"}}
                                        onPress={toggleModal2}
                                />
                            </Text>
                        </View>

                    </View>
                    <View>
                        <Text
                            style={{
                                margin: 5,
                                fontSize: 15
                            }}>-------------------------------------------------</Text>


                        <Text style={{margin: 10, fontSize: 25, textAlign: "center"}}>Choisissez votre
                            modèle</Text>
                        <View Style={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            {parcours}
                        </View>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15
                            }}>-------------------------------------------------</Text>
                    </View>
                    <View>
                        <Text style={{margin: 10, alignSelf: "center"}}>

                            <Button style={styles.commandButton}
                                    type="clear"
                                    title='Laisser un Avis'
                                    titleStyle={{color: "white"}}
                                    onPress={toggleReviews}
                            />

                        </Text>
                        <Text style={{margin: 10, fontSize: 20, textAlign: "center"}}>Ce que les autres ont
                            pensé</Text>
                        <View>
                            {reviews.map((avis, i) => {
                                return (
                                    <Card key={i}>
                                        <Card.Title>{avis.pseudo}</Card.Title>
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
                                                <Text style={{width: vw(60)}}>{avis.contenu}</Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: "center",
                                                    margin: 20
                                                }}>
                                                    {stars}
                                                </View>
                                            </View>
                                        </View>
                                    </Card>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal isVisible={isModalVisible}>
                <View style={{color: "white", height: vh(70)}}>

                    <PricingCard
                        style={{height: vh(50)}}
                        color="#354F52"
                        title={prenom}
                        price={email}
                        pricingStyle={{fontSize: 20}}
                        info={['15 Rue des cuirassiers', 'Lyon 3ème']}

                        button={{title: '  Appeler', icon: 'call', color: "#354F52"}}
                    />


                    <LinearProgress style={{width: vw(70), alignSelf: "center"}} color="white"/>

                    <Button style={styles.commandButton}
                            type="clear"
                            title='Fermer Contacts'
                            titleStyle={{color: "white"}}
                            onPress={toggleModal}
                    />

                </View>
            </Modal>

            <Modal isVisible={isModalVisible2}>

                <View style={{color: "white", height: vh(70)}}>
                    <ScrollView>
                        <View style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/1.png")
                                }
                            />
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/2.png")
                                }
                            />
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/3.png")
                                }
                            />
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/4.png")
                                }
                            />
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/5.png")
                                }
                            />
                            <Image
                                style={{width: 300, height: 300, margin: 5}}
                                source={
                                    require("../assets/6.png")
                                }
                            />
                        </View>
                    </ScrollView>

                    <LinearProgress style={{width: vw(70), alignSelf: "center"}} color="white"/>

                    <Button style={styles.commandButton}
                            type="clear"
                            title='Fermer Portfolio'
                            titleStyle={{color: "white"}}
                            onPress={toggleModal2}
                    />

                </View>
            </Modal>


            <Modal isVisible={isModalVisibleReviews} >
                <View style={{color: "white", height: vh(60),backgroundColor: "gray", borderRadius: 20}}>

                    <View style={{marginTop: 30, borderRadius: 5}}>

                        <TextInput style={{ borderColor: '#dfe6e9', borderWidth: 1, borderRadius: 5, width: "95%", alignSelf: "center"}}
                            onChangeText={(value) => setPeudo(value)}
                            value={pseudo}
                            label="Pseudo"
                            placeholder='Entrez votre pseudo'
                        />

                        <TextInput style={{ borderColor: '#354F52', borderWidth: 1, borderRadius: 5, height: 200, width: "95%", alignSelf: "center"}}
                                   editable
                                   multiline
                                   numberOfLines={6}
                                   maxLength={200}
                                   label="Votre Avis"
                                   placeholder="Faites votre retour sur la prestation :)"
                                   onChangeText={(value) => setContenu(value)}
                                   value={contenu}
                        />

                        <View style={{flexDirection: 'row', justifyContent: "center", margin: 12}}>
                            {stars}
                        </View>

                        <Button
                                buttonStyle={{backgroundColor: "white", width: "85%", alignSelf: "center", marginBottom: 10}}
                                type="clear"
                                title='Envoyer '
                                titleStyle={{color: "Black"}}
                                onPress={recupReviews}
                        />

                    </View>

                    <Button buttonStyle={{backgroundColor: "white", width: "85%", alignSelf: "center"}}
                            type="clear"
                            title="Quitter"
                            titleStyle={{color: "red"}}
                            onPress={toggleReviews}
                    />

                </View>
            </Modal>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        professionnels: state.professionnels,
        proDetails: state.proDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPrestation: (prestation) => {
            dispatch({type: 'get-Prestation', prestation: prestation})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HairdresserDetails);

const styles = StyleSheet.create({
    scrollview: {
        marginTop: 30,
        flex: 1,
    },
    commandButton: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 20,
    }
});