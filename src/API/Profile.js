import axios from 'axios';
import Cookies from 'universal-cookie';
import { getAccessToken } from '../Components/Util/helper';
import { Logout, RefreshToekn } from './Auth';

const Cookie = new Cookies();
const userName = Cookie.get('userName');

// const refresh = Cookie.get('refresh');
// axios.interceptors.request.use(
//     (res) => {
//         return res;
//     },
//     (err) => {
//         return Promise.reject(err);
//      }
// );

// axios.interceptors.response.use(
//     (res) => {
        
//         return res;
//     },
//     (err) => {
//         if(err.response.status === 401){
//             console.log('inter')
//             console.log(err.response);
//             // if(refresh !== undefined && refresh.length > 0){
//             //     RefreshToekn().then(res=>{
                        
//             //         Cookie.set('auth' , res.data.access_token);
//             //         Cookie.set('refresh' , res.data.refresh_token);
                    
//             //     }).catch(err => console.log(err)) 
                
//             // }
//             // else Logout()
//         } 
//         return Promise.reject(err);
//      }
// );


export const getUserProfile = () => {
    return axios.get(process.env.REACT_APP_API_URL+'profile/user/get/'+userName ,{headers : {'Authorization': 'Bearer ' + getAccessToken()}});
}