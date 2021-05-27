export default function(mail = null, action){
    if(action.type == 'add-mail'){
        console.log('reducer user utilisé');
        let newMail = action.mail;
        console.log(action.mail);
        return newMail;
    } else {
        return mail;
    }
};