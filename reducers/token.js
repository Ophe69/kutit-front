export default function(token = null, action){
    if(action.type == 'add-token'){
        let newToken = action.token;
        return newToken;
    } else {
        return token;
    }
}