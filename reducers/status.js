export default function(statut = null, action){
    if(action.type == 'get-status'){
        let newStatut = action.statut;
        return newStatut;
    } else {
        return statut;
    }
}