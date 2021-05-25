export default function(coupe = [], action){
    if(action.type === 'getCoupe'){
       // console.log("redux")
        var coupeCopy = [...coupe, action.coupe, action.prixCoupe, action.dateCoupe, action.heureCoupe]
        console.log("Redux " + coupeCopy);
        return coupeCopy;
    } else {
        return coupe;
    }
}