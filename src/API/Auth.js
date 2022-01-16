import axios from 'axios';


const AUTH_PATH = process.env.REACT_APP_API_URL + "/auth/";

export const Register = (data) => {
    return axios.post(AUTH_PATH+"signup" , data);
}

export const Login = (data) => {
    return axios.post(AUTH_PATH+"signin" , data);
}

export const MailCodeResend = (data) => {
    return axios.post(AUTH_PATH+"mail/resend" , data);
}

export const MailCodeVerified = (data) => {
    return axios.post(AUTH_PATH+'mail/verify' , data);
}

export const RefreshToekn = (data) => {
    return axios.post(AUTH_PATH+'refresh' , data);
}



