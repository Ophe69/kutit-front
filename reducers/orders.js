export default function(exist = false, action){
    if(action.type == 'get-order'){
        return action.exist;
    } else {
        return exist;
    }
}