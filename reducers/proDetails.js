export default function(proDetails = null, action){
    if(action.type == 'get-details'){
        let proDetailsCopy = action.proDetails;
        return proDetailsCopy;
    } else {
        return proDetails;
    }
}