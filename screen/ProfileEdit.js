import React, {useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Platform, 
    Image,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';

import {useTheme, Avatar} from 'react-native-paper';

import { connect } from 'react-redux';

function ProfileEdit(props) {

    const navigation = props.navigation

    const {colors} = useTheme();
    const [secureTextEntry, setSecureTextEntry] = useState(false);
    //const [image, setImage] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newImage, setNewImage] = useState ('');
    const [newPseudo, setNewPseudo] = useState('');


        const editProfile = async() => {
            //var data = await fetch(`http://172.16.190.133:3000/editProfile?token=${props.token}`, {
            //var data = await fetch(`http://192.168.1.13:3000/editProfile?token=${props.token}`, {
            var data = await fetch(`http://172.20.10.5:3000/editProfile?token=${props.token}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body:`token=${props.token}&newPseudo=${newPseudo}&newEmail=${newEmail}&newPassword=${newPassword}`
            });
            var response = await data.json();
            console.log('response new données front:', response)
            setNewPseudo(response.userName);
            setNewEmail(response.mail);
            setNewPassword(response.password);
            props.navigation.navigate('Profile');

    };
        
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Accès aux photos refusé!');
            }
            }
        })();
        }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
        };


    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'column', marginTop: 50,alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 20}}>Aperçu de votre nouvelle photo:</Text>    
                <Avatar.Image source={require('../assets/images/Jean-Kevin-pic.jpg')} size={200} />
                <TouchableOpacity style={styles.commandButton} onPress={pickImage}>
                    <Text style={styles.panelButtonTitle}>Changer image profil</Text>
                </TouchableOpacity>
            </View> 
        
            <View style={styles.containerEdit}>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text}  size={20} />
                    <TextInput
                    placeholder="Nouveau nom d'utilisateur"
                    placeholderTextColor="#666666"
                    autoCorrect={false} // pour ne pas avoir de correction orthographique
                    autoCapitalize="none"
                    onChangeText={(value) => {setNewPseudo(value)}}
                    value={newPseudo}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                    placeholder="Nouvel Email"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => {setNewEmail(value)}}
                    value={newEmail}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="lock" color={colors.text} size={20} />
                    <TextInput
                    placeholder="Nouveau mot de passe"
                    placeholderTextColor="#666666"
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => {setNewPassword(value)}}
                    value={newPassword}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View> 
                <TouchableOpacity 
                    style={styles.commandButton}
                    onPress={() => {editProfile()} }  >
                    <Text style={styles.panelButtonTitle}
                    //onPress={()=>{navigation.navigate('Profil', { screen: 'Profile' })}}
                    
                    >Editer mon Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.commandButton}
                    onPress={()=>{navigation.navigate('Profil', { screen: 'Profile' })}}  >
                    <Text style={styles.panelButtonTitle}
                    >Retour à mon profil</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>            
        
    )
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
)(ProfileEdit);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
    containerEdit:{
        flex: 1,
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 70,
        },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,

        },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
    paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        },
    panelHeader: {
        alignItems: 'center',
        },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
        },
    panelTitle: {
        fontSize: 27,
        height: 35,
        },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
        },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
        },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
        },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
        },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
        },
});
