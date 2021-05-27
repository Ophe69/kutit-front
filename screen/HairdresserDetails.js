import React, {useState} from 'react'
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-expo-viewport-units';
import Modal from 'react-native-modal';

import {Overlay, Tab, LinearProgress, PricingCard, Card, ListItem, Button, Icon, Input} from 'react-native-elements'


function HairdresserDetails(props) {

    const [review, setReview] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisibleReviews, setModalVisibleReviews] = useState(false);
    const [reviews, setReviews] = useState([]);

    const [pseudo, setPeudo] = useState('')
    const [contenu, setContenu] = useState('');
    //const [disabled, setDisabled] = useState(false);



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };
    const toggleReviews = () => {
        setModalVisibleReviews(!isModalVisibleReviews);
        //disabled={true}
    };

    // var reviews = [];
    const recupReviews = () => {
        setReviews([...reviews, {pseudo: pseudo, contenu: contenu}])
        //setDisabled(true);
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
                <Button
                    icon={<Icon name='money' color='#ffffff'/>}
                    buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title=' Commander'
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
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', margin: "1.5%"}}>
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

                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Text style={{margin: 10}}>
                                <Button title="Contacts" onPress={toggleModal}/>
                            </Text>

                            <Text style={{margin: 10}}>
                                <Button title="Portfolio" onPress={toggleModal2}/>
                            </Text>
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
                            <Button title="Laisser un Avis" onPress={toggleReviews}/>
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
                        color="#4f9deb"
                        title={prenom}
                        price={prenom + "." + nom + "@gmail.com"}
                        info={['15', 'Rue des curassiers', 'Lyon 3ème']}
                        button={{title: 'Appeler', icon: 'call'}}
                    />

                    <LinearProgress color="primary"/>
                    <Button style={{margin: 2}} title="Fermer Contacts" onPress={toggleModal}/>
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
                    <LinearProgress color="primary"/>
                    <Button style={{margin: 2}} title="Fermer Portfolio" onPress={toggleModal2}/>
                </View>
            </Modal>


            <Modal isVisible={isModalVisibleReviews}>
                <View style={{color: "white", height: vh(70)}}>

                    <View style={{marginTop: 100}}>
                        <Input
                            style={{color: "white"}}
                            placeholder='Entrer un pseudo'
                            onChangeText={(value) => setPeudo(value)}
                            value={pseudo}
                        />

                        <Input
                            style={{height: vh(20), color: "white"}}
                            placeholder='Entrer votre avis'
                            onChangeText={(value) => setContenu(value)}
                            value={contenu}
                        />

                        <View style={{flexDirection: 'row', justifyContent: "center", margin: 20}}>
                            {stars}
                        </View>
                        <Button
                            title="Valider"
                            //onPress={recupReviews(pseudo, contenu) }
                            onPress={recupReviews}
                        />

                    </View>

                    <Button
                        style={{margin: 2, opacity: .8}} title="J'ai fini"
                        onPress={
                            toggleReviews
                        }
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
});