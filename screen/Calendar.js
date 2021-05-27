import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';


export default function Calendar() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [barbershop, setBarbershop] = useState(false);
    const [latitude, setLatitude] = useState(45);
    const [longitude, setLongitude ] = useState(4.9);
    const [prestations,setPrestations] = useState([]);
    const [degrade, setDegrade] = useState(false);
    const [bouleAZ, setBouleAZ] = useState(false);
    const [coloration, setColoration] = useState(false);
    const [chignon, setChignon] = useState(false);
    const [barbe, setBarbe] = useState(false);
    const [shampoing, setShampoing] = useState(false);
    const [imageButton, setImageButton] =useState(false);
    const [imageNumber, setImageNumber] = useState(1);
    const [stars, setStars] = useState(3);
    const [votedBy, setVotedBy] = useState(10);

    const handleDegrade = () => {
        if(!degrade){
            setPrestations([...prestations, { type :"dégradé", prix: Math.floor(Math.random() * 21) + 10 }]);
            setDegrade(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "dégradé"));
            setDegrade(false);
        }    
    }

    const handleBouleAZ = () => {
        if(!bouleAZ){
            setPrestations([...prestations, { type: "bouleAZ", prix: Math.floor(Math.random() * 11) + 10 }]);
            setBouleAZ(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "bouleAZ"));
            setBouleAZ(false);
        }    
    }

    const handleColoration = () => {
        if(!coloration){
            setPrestations([...prestations, { type: "coloration", prix: Math.floor(Math.random() * 21) + 20 }]);
            setColoration(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "coloration"));
            setColoration(false);
        }    
    }

    const handleChigon = () => {
        if(!chignon){
            setPrestations([...prestations, { type: "chignon", prix: Math.floor(Math.random() * 11) + 20 }]);
            setChignon(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "chignon"));
            setChignon(false);
        }    
    }

    const handleBarbe = () => {
        if(!barbe){
            setPrestations([...prestations, { type: "barbe", prix: Math.floor(Math.random() * 9) + 7 }]);
            setBarbe(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "barbe"));
            setBarbe(false);
        }
    }

    const handleShampoing = () => {
        if(!shampoing){
            setPrestations([...prestations, { type: "shampoing", prix: Math.floor(Math.random() * 11) + 5 }]); 
            setShampoing(true);
        } else {
            setPrestations(prestations.filter(e => e.type != "shampoing"));
            setShampoing(false);
        }    
    }

    const handleRandomNumbers = () => {
        if(!imageButton){
            setImageNumber(Math.floor(Math.random() * 10) + 1); // 1-10
            setStars(Math.floor(Math.random() * 5) + 1);
            setVotedBy(Math.floor(Math.random() * 50) + 1);
            setImageButton(true);
        } else {
            setImageNumber(1);
            setStars(3);
            setVotedBy(10);
            setImageButton(false);
        }
    }

    let statut;

    if(barbershop) {
        statut = 'salon';
    } else {
        statut = 'independant';
    }

    // `nom=${nom}&prenom=${prenom}&mail=${mail}&password=${password}&barbershop=${barbershop}&latitude=${latitude}&longitude=${longitude}&prestations=${prestations}`

    const addPro = async() => {

        let datas = JSON.stringify({
            nom,
            prenom,
            mail,
            password,
            statut,
            latitude,
            longitude,
            prestations,
            imageNumber,
            stars,
            votedBy
        })
        const proDetails = await fetch('http://172.17.188.18:3000/create-pro', {
        //const proDetails = await fetch('http://172.17.188.8:3000/create-pro', {
                method: 'POST',
                headers: {'Content-Type':'application/Json'},
                body: datas
        });
        const data = await proDetails.json();
        console.log(data);
    };

    return (
        <View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}> 

                <Text style={{ marginTop: 80, margin: 20 }}>INFOS</Text>

                <TextInput
                    placeholder="nom"
                    onChangeText ={(val) => setNom(val)}
                    value={nom}
                    style={{margin: 10 }}
                />
                <TextInput
                    placeholder="prenom"
                    onChangeText ={(val) => setPrenom(val)}
                    value={prenom}
                    style={{margin: 10 }}
                />
                <TextInput
                    placeholder="mail"
                    onChangeText ={(val) => setMail(val)}
                    value={mail}
                    style={{margin: 10 }}
                />
                <TextInput
                    placeholder="password"
                    onChangeText ={(val) => setPassword(val)}
                    value={password}
                    style={{margin: 10 }}
                />
                <TextInput
                    placeholder="latitude"
                    onChangeText ={(val) => setLatitude(val)}
                    value={latitude}
                    style={{margin: 10 }}
                />
                <TextInput
                    placeholder="longitude"
                    onChangeText ={(val) => setLongitude(val)}
                    value={longitude}
                    style={{margin: 10 }}
                />
                <Button 
                    title={barbershop ? 'salon -- toggle' : 'barbershop  -- toggle'}
                    onPress={() => setBarbershop(!barbershop)}
                    buttonStyle={{ margin: 10 }}
                /> 

                <Text style={{ margin: 20 }}>PRESTATIONS</Text>

                <Button 
                    title="dégradé"
                    onPress={() => {
                        handleDegrade();
                    }} //min 10$ - max 30$
                    buttonStyle={ degrade ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                /> 
                <Button 
                    title="bouleAZ"
                    onPress={() => {
                        handleBouleAZ();
                    }} //min 10$ - max 20$
                    buttonStyle={ bouleAZ ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                /> 
                <Button 
                    title="coloration"
                    onPress={() => {
                        handleColoration();
                    }} //min 20$ - max 40$
                    buttonStyle={ coloration ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                /> 
                <Button 
                    title="chignon"
                    onPress={() => {
                        handleChigon();
                    }} //min 20$ - max 30$
                    buttonStyle={ chignon ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                /> 
                <Button 
                    title="barbe"
                    onPress={() => {
                        handleBarbe();
                    }} //min 7$ - max 15$
                    buttonStyle={ barbe ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                /> 
                <Button 
                    title="shampoing"
                    onPress={() =>{ 
                        handleShampoing();
                    }} //min 5$ - max 15$
                    buttonStyle={ shampoing ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                />
                <Button 
                    title="image-number"
                    onPress={() =>{ 
                        handleRandomNumbers();
                    }} //min 5$ - max 15$
                    buttonStyle={ imageButton ? { margin: 10, backgroundColor: '#ccc'} : { margin: 10 }}
                />
                <Button 
                    title="create"
                    buttonStyle={{ marginBottom: 40, margin: 10, backgroundColor: 'red'}}
                    onPress={() => {
                        console.log(prestations);
                        addPro();
                    }}
                /> 
            </ScrollView>  
        </View>
        
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});