import axios from 'axios';
import Cookies from 'universal-cookie';
import { getAccessToken } from '../Components/Util/helper';

const Cookie = new Cookies();
const userName = Cookie.get('userName');


export const getUserProfile = (user) => {
    return axios.get("https://livelyverse.io/api/profile/user/get/"+user ,{headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const UploadUserImage = (formData) => {
    return axios.post("https://livelyverse.io/api/profile/user/image/upload", formData , {headers : {'Authorization': 'Bearer ' + getAccessToken() , 'Content-Type': 'multipart/form-data'}})
}

export const UpdateUserProfile = (data) => {
    console.log(data);
    return axios.post("https://livelyverse.io/api/profile/user/update", data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}} );
}