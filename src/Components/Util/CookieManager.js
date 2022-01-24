import Cookies from 'universal-cookie';

const Cookie = new Cookies();

export const CreatePastUserCookie = (user) => {
    const userCookie = Cookie.get('user');

    let userData = {};
    if(userCookie === undefined || userCookie === null || !userCookie){
        userData[user] = {
            'confirm' : 'true',
            'logged' : 'true',
        }
    }else{
        userData = userCookie;
        userData[user] = { 
            'confirm' : 'true',
            'logged' : 'true',
        }   
    }
    Cookie.set('user' , JSON.stringify(userData));
}


export const UserIsNotConfirmed = (user) => {
    const userCookie = Cookie.get('user');

    let userData = {};
    if(userCookie === undefined || userCookie === null || !userCookie){
        userData[user] = {
            'confirm' : 'false',
            'logged' : 'false',
        }
    }else{
        userData = userCookie;
        userData[user] = { 
            'confirm' : 'false',
            'logged' : 'false',
        }
    }
    
    Cookie.set('user' , JSON.stringify(userData));
}

export const UserIsConfirmed = (user) => {
    const userCookie = Cookie.get('user');
    let userData = userCookie;

    userData[user]['confirm'] = 'true';
    Cookie.set('user' , JSON.stringify(userData));
}

export const UserIsNotLogged = (user) => {
    const userCookie = Cookie.get('user');
    let userData = userCookie;

    userData[user]['logged'] = 'false';
    Cookie.set('user' , JSON.stringify(userData));
}

export const UserIsLogged = (user) => {
    const userCookie = Cookie.get('user');
    let userData = userCookie;

    userData[user]['logged'] = 'true';
    Cookie.set('user' , JSON.stringify(userData));
}



export const IsUserConfirmed = (user) => {
    if(user === undefined || user === null || !user)
        return false;
    const userCookie = Cookie.get('user');
    if(userCookie === undefined || userCookie === null || !userCookie)
        return false;
    
    return userCookie[user]['confirm'] === 'false' ?  false : true; 
}

export const IsUserLogged = (user) => {
    if(user === undefined || user === null || !user)
        return false;
    const userCookie = Cookie.get('user');
    if(userCookie === undefined || userCookie === null || !userCookie)
        return false;

    return userCookie[user]['logged'] === 'false' ?  false : true; 
}