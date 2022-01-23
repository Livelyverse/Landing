import axios from 'axios';
import { getAccessToken } from '../Components/Util/helper';
import Cookies from 'universal-cookie';
import { UserIsNotLogged } from '../Components/Util/CookieManager';


const Cookie = new Cookies();
const AUTH_PATH = process.env.REACT_APP_API_URL + "auth/";

const user = Cookie.get('user');
const userName = Cookie.get('userName');
let confirmed = undefined;
if(userName)
    confirmed = user[userName]['confirm'];
axios.interceptors.request.use(
    (res) => {
        return res;
    },
    (err) => {
        return Promise.reject(err);
     }
);

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if(err.response.status === 417){
            if(confirmed === 'true'){
                RefreshToekn().then(res=>{
                    Cookie.set('auth' , res.data.access_token);
                    Cookie.set('refresh' , res.data.refresh_token);
                    return res;
                }).catch(err => console.log(err)) 
            }
        } 
        return Promise.reject(err);
     }
);


export const Register = (data) => {
    return axios.post(AUTH_PATH+"signup" , data);
}

export const Login = (data) => {
    return axios.post(AUTH_PATH+"signin" , data);
}

export const MailCodeResend = (data) => {
    return axios.post(AUTH_PATH+"mail/resend" , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const MailCodeVerified = (data) => {
    return axios.post(AUTH_PATH+'mail/verify' , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const RefreshToekn = () => {
    const data = {refresh_token : Cookie.get('refresh')};
    return axios.post(AUTH_PATH+'refresh' , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}})
}

export const Logout = (user) => {
    Cookie.remove('auth');
    Cookie.remove('userName');
    Cookie.remove('refresh');
    UserIsNotLogged(user)
    window.location.replace('/');
}



