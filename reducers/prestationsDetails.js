export default function(prestation = [], action){
    if(action.type == 'get-Prestation'){
        return action.prestation;
    } else {
        return prestation;
    }
}