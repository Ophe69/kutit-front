import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , ScrollView, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

function History(props) {
    const [orders, setOrders] = useState(null);
    let date = new Date();

    // Fetch all Professionnels from db
    useEffect(() => {
        const call = async() => { 

            const response = await fetch(`http://172.16.190.133:3000/orders?token=${props.token}`
            // const response = await fetch('http://192.168.43.103:3000/orders'
        );
            const data = await response.json();
            console.log('get orders from db', data.orders);
            if(data.result){
                setOrders(data.orders);
            } else {
                setOrders(null)
            }
        }
        call();
    }, []); 

    let history;

    if(orders !== null){
        history = orders.map((order, i) => {
            return (
                <View style={styles.user} key={i}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text>{order.date}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column'}}>
                        <Text style={{ alignSelf: 'center' }}>{order.type}</Text>
                        <Text style={{ alignSelf: 'center' }}>${order.prix}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text >{order.proId.prenom}</Text> 
                        <Text>{order.proId.nom}</Text>
                    </View>
                </View>
            );
    });
    } else {
        history = <Text>No Orders Found</Text>
    }

    return (
        <ScrollView
            style={styles.scrollview}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <Text style={{ fontSize: 25, marginBottom: 50 }}>Historique des commandes</Text>
            {history}
        </ScrollView>
        
    )
}

function mapStateToProps(state) {
    return { 
        token: state.token
    }
}

export default connect(
mapStateToProps,
null
)(History);


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        marginTop: 80
    },
    user: {
        flex: 1,
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