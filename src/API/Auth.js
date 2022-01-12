import {API_MAIN_ADDRESS} from './basic';
import axios from 'axios';


const AUTH_PATH = process.env.REACT_APP_API_URL + "/auth/";

export const Register = (param) => {
    return axios.post(AUTH_PATH+"signup" , param);
}

export const Login = (param) => {
    return axios.post(AUTH_PATH+"signin" , param);
}

export const MailCodeResend = (param) => {
    return axios.post(AUTH_PATH+"mail/resend" , param);
}

export const MailCodeVerified = (param) => {
    return axios.post(AUTH_PATH+'mail/verify' , param);
}

export const RefreshToekn = (param) => {
    return axios.post(AUTH_PATH+'refresh' , param);
}



