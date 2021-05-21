export default function(professionnels = [], action){
    if(action.type == 'get-hairdressers'){
        let professionnelsCopy = action.professionnels;
        return professionnelsCopy;
    } else {
        return professionnels;
    }
}