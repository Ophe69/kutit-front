import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View , ScrollView, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';
import { Button, Card, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

{/* <View style={{ width: vw(100), height: vh(100) }}>
  ...
<View></View> */}


function HairdresserList(props) {

    const [proList, setProList] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setStatus(props.statut);
        if(status == "independant"){
            const freelanceCopy = props.professionnels.filter(e => e.statut != "salon");
            setProList(freelanceCopy);
        } else {
            const barbershopCopy = props.professionnels.filter(e => e.statut != "independant");
            setProList(barbershopCopy);
        }
    }, [status])

    const hairdressers = proList.map((pro, i) => {

        const ratings = [1,2,3,4,5].map((star, i) => {
        
                if(pro.stars > i) {
                            return(
                                <FontAwesome
                                    name="star"
                                    size={15}
                                    value={i}
                                    color='#f1c40f'
                                    key={i}
                                />)
                        } else {
                            return(
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color="black"
                                    value={i}
                                    onPress={() => {
                                        setReview(i+1);
                                    }}
                                    key={i}
                                />)
                        }
        })

        console.log(`../assets/${pro.statut}/${pro.statut}_1.jpg`);
        let path = `../assets/${pro.statut}/${pro.statut}_1.jpg`;


        return(
            <TouchableOpacity
                key={i}
                onPress={() => {
                    props.getDetails(pro);
                    props.navigation.navigate('HairdresserDetails', { screen: 'HairdresserDetails' });
                }}
            >
                <View
                    key={i}
                    style={styles.user}
                >
                    {/* <Ionicons
                        name="person-circle-sharp"
                        size={24} color="black"
                        style={styles.avatar}
                    /> */}
                    <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={styles.image}
                            source={require("../assets/independant/independant_1.jpg")}
                            //source={require(path)}
                            //source={{uri: path}}
                            //source={ {uri: `../assets/${pro.statut}/${pro.statut}_1.jpg`} }
                            style={{width: 80, height: 80, margin: 5, borderRadius: 50}}
                        />
                    </View>
                    <View style={{ flex: 1.3, flexDirection: 'column'}}>
                        <Text style={{ alignSelf: 'center', marginVertical: 10 }}>{`${pro.prenom} ${pro.nom}`}</Text>
                        <Text style={{ alignSelf: 'center' }}>{pro.statut}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', flex: 0.8 }}>
                        <View style={styles.rating}>
                            {ratings}
                        </View>
                        <Text style={{ textAlign: 'center'}}>reviews: {pro.votedBy}</Text>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    });

    console.log('date from redux', props.date)

    return (

        <ScrollView
            style={styles.scrollview}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <Text style={{ textAlign: 'center', fontSize: 25, marginBottom: 50 }}>
                {`${props.statut}s disponibles`}</Text>
            <View style={{ flex: 1 }}>
                { hairdressers }
            </View>
            {/* <View style={{ flexDirection: 'row', margin: 40 }}>
                { stars }
            </View> */}
        </ScrollView>


    )
}

function mapStateToProps(state) {
    return {
        professionnels : state.professionnels,
        statut: state.statut,
        date: state.date
    }
}

function mapDispatchToProps(dispatch){
    return {
        getDetails: (proDetails) => {
            dispatch({ type:'get-details', proDetails: proDetails });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HairdresserList);


const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        marginTop: 80,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(90),
        backgroundColor: "#FFF",
        margin: 5,
        borderRadius: 5,
        height: 100
    },
    image: {
        marginHorizontal: 50
    },
    avatar: {
        marginHorizontal: 50,
    },
    rating: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    // rating: {
    //     flexDirection: 'row',
    //     backgroundColor: 'pink',
    //     flex: 1,
    //     justifyContent: 'center'
    // },
});
