import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

//import BottomSheet from 'reanimated-bottom-sheet';
//import Animated from 'react-native-reanimated';


function Profile({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                    <Avatar.Image
                    source={require('../assets/images/avatar2.png')}
                    size={120}
                    />
                </View>
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                    <Title style={styles.title}>Cantinou</Title>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Bangkok</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>+33 (0)6.43.54.76.87</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>cantin@vandame.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                    }]}>
                    <Title>Rendez-vous à venir</Title>
                    <Caption style={styles.rdvavenir}>Liste rdv à venir</Caption>
                </View>
                
            </View>


            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#354F52" size={25}/>
                        <Text 
                        style={styles.menuItemText}
                        onPress={()=>{navigation.navigate('Favorite', { screen: 'Favorite' })}}
                        >Coiffeurs Favoris</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#354F52" size={25}/>
                        <Text style={styles.menuItemText}>Historique Réservations</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <FontAwesome name="star-half-full" color="#354F52"  size={25}/>
                        <Text 
                        style={styles.menuItemText}
                        onPress={()=>{navigation.navigate('Reviews', { screen: 'Reviews' })}}
                        >Mes avis</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="help-circle" color="#354F52"  size={25}/>
                        <Text style={styles.menuItemText}>Aide</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Ionicons name="settings-outline" color="#354F52"  size={24}/>
                        <Text style={styles.menuItemText}>Réglages</Text>
                    </View>
                </TouchableRipple>
            </View>
            <View>
                <TouchableOpacity style={styles.commandButton}
                    onPress={() => {
                        // handleSearch();
                        navigation.navigate('ProfileEdit', { screen: 'ProfileEdit' });
                    }}>
                    <Text style={styles.panelButtonTitle}>Editer mon Profil</Text>
                </TouchableOpacity>
{/*                 <Button
                    buttonStyle={{ backgroundColor: '#354F52', marginTop: 40, width: 200, height: 30}}
                    containerStyle={{ width: 200, height: 80}}
                    title='Editer mon profil'
                    onPress={() => {
                        // handleSearch();
                        navigation.navigate('ProfileEdit', { screen: 'ProfileEdit' });
                    }}
                    /> */}
            </View>

        </SafeAreaView>
        
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rdvavenir: {
        fontSize: 20,
    },
    menuWrapper: {
        
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    buttonSign: {
        flexDirection: 'row', 
        height: 50,
        width: 200,
        borderRadius: 20,
        backgroundColor: '#354F52',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 90,
        marginTop: 30,
        elevation:3,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },

});

