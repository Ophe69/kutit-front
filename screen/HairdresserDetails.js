import React, {useState} from 'react'

import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
import {connect} from 'react-redux';


import Icon from 'react-native-vector-icons/FontAwesome';

function HairdresserDetails(props) {

    const [review, setReview] = useState(0);

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

    // console.log(props.professionnels);

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
                        <Text style={{fontWeight: "bold", fontSize: "25px", marginBottom: 0}}>Lucien Fiard</Text>
                        <View style={{flexDirection: 'row', justifyContent: "flex-end"}}>
                            {stars}
                        </View>
                    </View>

                </View>
                <View style={{
                    flexDirection: "row",
                    fontSize: "20px",
                    justifyContent: "space-between",
                    margin: 15,
                    borderBottom: "2px black solid"
                }}>
                    <Text style={{fontSize: "20px"}}>portFolio </Text>
                    <Text style={{fontSize: "20px"}}>Contact </Text>
                </View>
                <View>
                    <Text style={{margin: 5}}>Choisissez votre prestation</Text>
                    <View Style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <Button
                            title="shampoing - 23€"
                            type="solid"
                            buttonStyle={{backgroundColor: "#009788", display: "inline"}}
                            onPress={() => {
                                props.navigation.navigate('ChoixRDV', {screen: 'ChoixRDV'});
                            }}/>

                    </View>
                </View>
            </View>
        </View>

    )
}

export default HairdresserDetails;


/*

function mapStateToProps(state) {
    return {
        professionnels : state.professionnels
    }
}

export default connect(
    mapStateToProps,
    null
)(HairdresserDetails);

 */