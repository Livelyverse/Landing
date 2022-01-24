import axios from 'axios';
import Cookies from 'universal-cookie';
import { getAccessToken } from '../Components/Util/helper';

const Cookie = new Cookies();
const userName = Cookie.get('userName');


export const getUserProfile = (user) => {
    return axios.get(process.env.REACT_APP_API_URL+'profile/user/get/'+user ,{headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const UploadUserImage = (formData) => {
    return axios.post(process.env.REACT_APP_API_URL+'profile/user/image/upload', formData , {headers : {'Authorization': 'Bearer ' + getAccessToken() , 'Content-Type': 'multipart/form-data'}})
}

export const UpdateUserProfile = (data) => {
    console.log(data);
    return axios.post(process.env.REACT_APP_API_URL+'profile/user/update', data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}} );
}