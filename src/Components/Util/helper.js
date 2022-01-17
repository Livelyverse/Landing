import Cookies from 'universal-cookie';

const Cookie = new Cookies();

export const getUserName = () =>{
    return Cookie.get('userName');
}

export const getAccessToken = () => {
    return Cookie.get('auth');
}