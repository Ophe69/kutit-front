import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 

function HairdresserList(props) {

    const [review, setReview] = useState(0);

    const stars = [1,2,3,4,5].map((star, i) => {
        if(review > i) {
            return(
                <FontAwesome 
                    name="star" 
                    size={24}
                    value={i} 
                    onPress={() => {
                        setReview(i+1); 
                    }} 
                    color="black"
                    style={review > i ? { color: '#f1c40f' } : null} 
                />)
        } else {
            return(
                <FontAwesome 
                        name="star-o" 
                        size={24} 
                        color="black" 
                        value={i} 
                        onPress={() => {
                            setReview(i+1); 
                        }} 
                />)
        }    
    })

    //console.log(props.professionnels);
    
    return (
        <View style={styles.container}>
            <Text>HairdresserList</Text>

            <View style={{ flexDirection: 'row', margin: 40 }}>
                { stars }
            </View>
            <Button
                title='Details'
                onPress={() => {
                    props.navigation.navigate('HairdresserDetails', { screen: 'HairdresserDetails' });
                }}
            />
        </View>

        // 
        
        
    )
}

function mapStateToProps(state) {
    return { 
        professionnels : state.professionnels
    }
  }
  
  export default connect(
    mapStateToProps, 
    null
  )(HairdresserList);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});






// stars models

// const stars = [1,2,3,4,5].map((star, i) => {
//     return(
//     <FontAwesome 
//         name="star" 
//         size={24}
//         value={i} 
//         onPress={() => {
//             setReview(i+1); 
//         }} 
//         color="black"
//         style={review > i ? { color: '#f1c40f' } : null} 
//          />)
//     })
// const stars2 = [1,2,3,4,5].map((star, i) => {
//     return(<FontAwesome 
//         name="star-o" 
//         size={24} 
//         color="black" 
//         value={i} 
//         onPress={() => {
//             setReview(i+1); 
//         }} 
//         style={review > i ? { color: '#f1c40f' } : null}
//         />)
//     })

 //the best Model
// const stars3 = [1,2,3,4,5].map((star, i) => {
// if(review > i) {
// return(
// <FontAwesome 
//     name="star" 
//     size={24}
//     value={i} 
//     onPress={() => {
//         setReview(i+1); 
//     }} 
//     color="black"
//     style={review > i ? { color: '#f1c40f' } : null} 
// />)
// } else {
// return(
// <FontAwesome 
//         name="star-o" 
//         size={24} 
//         color="black" 
//         value={i} 
//         onPress={() => {
//             setReview(i+1); 
//         }} 
// />)
// }    
// })