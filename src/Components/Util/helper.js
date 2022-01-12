import Cookies from 'universal-cookie';

const Cookie = new Cookies();

export const getUserName = () =>{
    return Cookie.get('userName');
}