import axios from 'axios';
import { getAccessToken } from '../Components/Util/helper';
import Cookies from 'universal-cookie';


const Cookie = new Cookies();

const AUTH_PATH = process.env.REACT_APP_API_URL + "auth/";


const refresh = Cookie.get('refresh');
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
        if(err.response.status === 401){
            console.log('inter')
            console.log(err.response);
            if(refresh !== undefined && refresh.length > 0){
                Logout();
                // RefreshToekn().then(res=>{
                        
                //     Cookie.set('auth' , res.data.access_token);
                //     Cookie.set('refresh' , res.data.refresh_token);
                    
                // }).catch(err => console.log(err)) 
                
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

export const Logout = () => {
    Cookie.remove('auth');
    Cookie.remove('userName');
    Cookie.remove('confirmed');
    Cookie.remove('refresh');
    window.location.replace('/');
}



