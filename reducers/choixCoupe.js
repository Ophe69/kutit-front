export default function(coupe = [], action){
    if(action.type === 'getCoupe'){
        var coupeCopy = [...coupe, action.coupe, action.prixCoupe, action.dateCoupe, action.heureCoupe]
        return coupeCopy;
    } else {
        return coupe;
    }
}