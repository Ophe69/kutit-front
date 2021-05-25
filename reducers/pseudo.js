export default function(pseudo = null, action){
    if(action.type == 'add-pseudo'){
        let newToken = action.pseudo;
        return newToken;
    } else {
        return pseudo;
    }
}