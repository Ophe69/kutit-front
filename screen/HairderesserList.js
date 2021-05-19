import React, { useState } from 'react'
import { StyleSheet, Text, View , ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { Button, Card, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


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
                    key={i}
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
                        key={i} 
                />)
        }    
    })

<<<<<<< HEAD
    //console.log(props.professionnels);
=======
    // const hairdressers2 = props.professionnels.map((pro, i) => {
    //     return(
    //         <ListItem 
    //             key={i} 
    //             onPress={() => {
    //                 props.getDetails(pro);
    //                 props.navigation.navigate('HairdresserDetails', { screen: 'HairdresserDetails' });
    //             }}
    //             style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}
    //         bottomDivider>
    //             <Ionicons name="person-circle-sharp" size={24} color="black" />
    //             <ListItem.Content style={{width: '100%'}}>
    //                 <ListItem.Title>{`${pro.prenom} ${pro.nom}`}</ListItem.Title>
    //                 <ListItem.Subtitle>{pro.status}</ListItem.Subtitle>
    //             </ListItem.Content>
    //         </ListItem>  
    //     );
    // });

    const hairdressers3 = props.professionnels.map((pro, i) => {
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
                <Ionicons name="person-circle-sharp" size={24} color="black" />
                <Text>{`${pro.prenom} ${pro.nom}`}</Text>
            </View> 
            </TouchableOpacity>
        );
    });

    console.log(props.professionnels);
>>>>>>> 6a08248b10e8b44e84ad053bcdff01a7e8b49a8d
    
    return (
        
            <ScrollView style={styles.scrollview}> 
            <Text style={{ textAlign: 'center' }}>HairdresserList</Text>
            <View style={{ flex: 1 }}>
                { hairdressers3 }
            </View>
            <View style={{ flexDirection: 'row', margin: 40 }}>
                { stars }
            </View>
            <Button
                title='Details'
                onPress={() => {
                    props.navigation.navigate('HairdresserDetails', { screen: 'HairdresserDetails' });
                }}
            />
            </ScrollView>
        
        
    )
}

function mapStateToProps(state) {
    return { 
        professionnels : state.professionnels
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
        marginTop: 80
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: "#FFF",
        margin: 5,
        borderBottomEndRadius: 5
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