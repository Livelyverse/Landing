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
            }else Logout(userName);
        } 
        if(err.response.status === 401){
            LogoutAllUsers();
        }
        return Promise.reject(err);
     }
);


export const Register = (data) => {
    return axios.post("https://livelyverse.io/api/auth/"+"signup" , data);
}

export const Login = (data) => {
    return axios.post("https://livelyverse.io/api/auth/"+"signin" , data);
}

export const MailCodeResend = (data) => {
    return axios.post("https://livelyverse.io/api/auth/"+"mail/resend" , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const MailCodeVerified = (data) => {
    return axios.post("https://livelyverse.io/api/auth/"+'mail/verify' , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}

export const RefreshToekn = () => {
    const data = {refresh_token : Cookie.get('refresh')};
    return axios.post("https://livelyverse.io/api/auth/"+'refresh' , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}})
}


export const ChangePassword = (data) => {
    return axios.post("https://livelyverse.io/api/auth/"+'changepassword' , data , {headers : {'Authorization': 'Bearer ' + getAccessToken()}})
}

export const Logout = (user) => {
    Cookie.remove('auth');
    Cookie.remove('userName');
    Cookie.remove('refresh');
    UserIsNotLogged(user);  
    window.location.replace('/');
}

export const LogOutAdmin = () => {
    Cookie.remove('auth');
    Cookie.remove('userName');
    Cookie.remove('refresh');
    window.location.replace('/');
}

export const LogoutAllUsers = () => {
    Cookie.remove('auth');
    Cookie.remove('userName');
    Cookie.remove('refresh');
    const userCookie = Cookie.get('user');
    
    Object.keys(userCookie).map((item) => {
        userCookie[item]['logged'] = 'false';
    })
    Cookie.set('user' , userCookie);
    window.location.replace('/');
}