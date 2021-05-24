export default function(heure = null, action){
    if(action.type == 'get-heure'){
        return action.heure;
    } else {
        return heure;
    }
}