import axios from 'axios';

export const SentContactMessage = (data) => {
    return axios.post(process.env.REACT_APP_API_URL+'profile/contact/send' ,  data )
}