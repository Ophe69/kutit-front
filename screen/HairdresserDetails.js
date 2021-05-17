import React, {useState} from 'react'

import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements'


import Icon from 'react-native-vector-icons/FontAwesome';

export default function HairdresserDetails(props) {

    const [review, setReview] = useState(0);

    var stars = [1,2,3,4,5].map((star, i) => {
        return(<Icon
            icon={'far fa-star'}
            value={i}
            onPress={() => {
                setReview(i+1);
                //setRatedBy(updateCount);
                //setGlobalRating(average);
                }}
            style={review > i ? { color: '#f1c40f' } : null}
            key={i}/>)
    })


    return (
        <View >
            <Button
                style={{marginTop: 40, display: "flex", justifyContent: "flex-start", width: "12%" }}
                title="<="
                type="solid"
                buttonStyle={{backgroundColor: "#009788"}}
                onPress={() => {props.navigation.navigate('BottomNavigator', {screen: 'ChoixRDV'})}}
            />
            <View style={{}} >
                <View>
                    <Image /*avatar *//>
                    <View>
                        <Text>Lucien Favre</Text>
                        <View style={{display: "flex", width: "100%", flexDirection: "row"}}>
                            <View className="rating">
                                { stars }
                            </View>
                        </View>
                    </View>

                </View>
                <View>
                    <Text>portFolio </Text>
                    <Text>Contact </Text>
                </View>
                <View>
                    <Text>Choisissez votre prestation</Text>
                    <View Style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <Button

                            title="shampoing - 23€"
                            type="solid"
                            buttonStyle={{backgroundColor: "#009788", width:"40%"}}
                            onPress={() => {
                                props.navigation.navigate('ChoixRDV', { screen: 'ChoixRDV' });
                            }}                        />
                        <Button

                            title="Dégradé - 18€"
                            type="solid"
                            buttonStyle={{backgroundColor: "#009788", width:"40%"}}
                            onPress={() => {
                                props.navigation.navigate('ChoixRDV', { screen: 'ChoixRDV' });
                            }}                        />
                        <Button

                            title="Coloration - 28€"
                            type="solid"
                            buttonStyle={{backgroundColor: "#009788", width:"40%"}}
                            onPress={() => {
                                props.navigation.navigate('ChoixRDV', { screen: 'ChoixRDV' });
                            }}                        />
                    </View>
                </View>
            </View>
        </View>

    )
}
