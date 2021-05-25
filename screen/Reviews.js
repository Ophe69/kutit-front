import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



function Reviews(props) {

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

    
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.title}>Qu'avez-vous pensé de votre prestation?</Text>
            </View>
            <View>
                <Text style={styles.nomPro}>prenom et nom pro</Text>
                <View style={{flexDirection: 'row', justifyContent: "flex-end", marginTop: 10}}>
                    {stars}
                </View>
                <View>
                    <Text style={{marginTop: 10, textAlign: "center", fontWeight: "bold"}}>status</Text>
                </View>
            </View>
        </SafeAreaView>
        
    )
}

export default Reviews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        
    },
    title: {
        fontSize: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    nomPro : {
        
    },
});