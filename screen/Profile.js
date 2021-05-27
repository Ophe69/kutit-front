import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image} from 'react-native';
import { Button, Card, Divider} from 'react-native-elements';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


import { connect } from 'react-redux';


function Profile(props) {

    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userImage, setUserImage] = useState ('');
    const [pseudo, setPseudo] = useState('');
    const [image, setImage] = useState('');
    

    const navigation = props.navigation
    //pour aller chercher les info user en db - fetch sur route profile
    const [userConnected, setUserConnected] = useState('');


    useEffect(() =>{
        const findUser = async() =>{
            const data = await fetch(`http://172.16.190.137:3000/profile?token=${props.token}`)
            //const data = await fetch(`http://192.168.1.13:3000/profile?token=${props.token}`)
            const response = await data.json()
 
            setPseudo(response.userConnected.userName)
            setUserMail(response.userConnected.mail);
            setUserPassword(response.userConnected.password);
            setUserImage(response.userConnected.image);
            
            
    }
    findUser()
}, []);
    

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                        <Avatar.Image
                        source={require('../assets/images/Jean-Kevin-pic.jpg')}
                        size={150}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                        <Title style={styles.title}>{pseudo.charAt(0).toUpperCase() + pseudo.substring(1).toLowerCase()}</Title>
                    </View>
                    <TouchableOpacity style={styles.commandButton}
                        onPress={() => {
                
                            navigation.navigate('ProfileEdit', { screen: 'ProfileEdit' });
                        }}>
                        <Text style={styles.panelButtonTitle}>Editer mon profil</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.userInfoSection}>
                    {/* <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>Bangkok</Text>
                    </View> */}
                    
                    <View style={styles.row}>
                        <Icon name="phone" color="#354F52" size={25}/>
                        <Text style={styles.menuItemText}>06.43.54.76.87</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#354F52" size={25}/>
                        <Text style={styles.menuItemText}>{userMail}</Text>
                    </View>
                </View>
                    <View>
                        <Card.Divider style={{ marginBottom: 20 }} />
                    </View>

    {/*             <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                        }]}>
                        <Title>Rendez-vous à venir</Title>
                        <Caption style={styles.rdvavenir}>Liste rdv à venir</Caption>
                    </View>
                    
                </View> */}


                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#354F52" size={25}/>
                            <Text 
                            style={styles.menuItemText}
                            onPress={()=>{navigation.navigate('History', { screen: 'History' })}}
                            >Historique des réservations</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <FontAwesome name="star-half-full" color="#354F52"  size={25}/>
                            <Text 
                            style={styles.menuItemText}
                            //onPress={()=>{navigation.navigate('Reviews', { screen: 'Reviews' })}}
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
                    <TouchableOpacity style={styles.commandButton}
                        onPress={() => {
                            // handleSearch();
                            navigation.navigate('Login', { screen: 'Login' });
                        }}>
                        <Text style={styles.panelButtonTitle}>Me déconnecter</Text>
                    </TouchableOpacity>
                </View>
                

            </SafeAreaView>
        </ScrollView>
    );
};

function mapStateToProps(state) {
    return { 
        token: state.token,
        pseudo: state.pseudo 
    }
}
export default connect(
    mapStateToProps, 
    null
)(Profile);


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
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
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
        color: '#354F52',
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
        marginTop: 15,
        marginHorizontal: 20,
        },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },
    logOutButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

});

