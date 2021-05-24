import moment from 'moment';
export default function(date = moment(new Date()).format('DD/MM/YYYY'), action){
    if(action.type == 'get-date'){
        return action.date;
    } else {
        return date;
    }
}