import { useState } from 'react';
import { UploadUserImage } from '../../API/Profile';
import placeHolder from './../../img/placeholder.png';

const UserAvatar = ({image}) => {
    const [userImage , setUserImage] = useState(image)
    console.log(userImage);
    const openFile = () => {
        const uploader = document.getElementById('UserImageUploader');
        uploader.click();
    }

    const getImage = (event) => {
        console.log(event.target.files[0])
        setUserImage( URL.createObjectURL( event.target.files[0]));
        const formData = new FormData();
        formData.append("file" , event.target.files[0] );
        UploadUserImage(formData).then(res=> console.log(res)).catch(err=> console.log(err));
    }
    

    return(
        <div className="userAvatarWrapper" style={userImage ? {backgroundImage: `url(${userImage})`} : {backgroundImage:`url(${placeHolder})`}} onClick={openFile}>
            <input id="UserImageUploader" type='file' accept='.png , .jpg , .jpeg' style={{display:'none'}} onChange={getImage}/>
        </div>
    )
}

export default UserAvatar;