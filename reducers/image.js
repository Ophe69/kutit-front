export default function(image = null, action){
    if(action.type == 'add-image'){
        let newImage = action.image;
        return newImage;
    } else {
        return image;
    }
}