import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme, Avatar} from 'react-native-paper';

import { connect } from 'react-redux';

function ProfileEdit() {

    const {colors} = useTheme();
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                    <Avatar.Image
                    source={require('../assets/images/avatar2.png')}
                    size={120}
                    />
            </View>
            <View style={styles.containerEdit}>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text}  size={20} />
                    <TextInput
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor="#666666"
                    autoCorrect={false} // pour ne pas avoir de correction orthographique
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
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    secureTextEntry={true}
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View>
    {/*             <View style={styles.action}>
                    <Feather name="phone" color={colors.text} size={20} />
                    <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    keyboardType="number-pad"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View> */}

{/*                 <View style={styles.action}>
                    <Icon name="map-marker-outline" color={colors.text} size={20} />
                    <TextInput
                    placeholder="Ville"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View> */}
                <View style={styles.action}>
                    <FontAwesome name="lock" color={colors.text} size={20} />
                    <TextInput
                    placeholder="mot de passe"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                        color: colors.text,
                        },
                    ]}
                    />
                </View> 
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Editer mon Profil</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>            
        
    )
};

export default ProfileEdit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
    containerEdit:{
        flex: 1,
        marginTop: 200,
        marginLeft: 30,
        marginRight: 30,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#354F52',
        alignItems: 'center',
        marginTop: 50,
        },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
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
        },
});
