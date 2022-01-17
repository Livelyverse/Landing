export const inputValidation = (text , inputType) => {
    console.log((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text)))
    console.log(text + ' : ' + inputType);
    if(inputType === 'userName'){
        if(text.length < 6) return false;
    }
    else if(inputType === 'email'){
        if(text.length < 4)
            return false
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text))
    }
    else if(inputType === 'password'){
        if(text.length < 8) return false;
    }

    console.log('nothing happend');
    return true;
}

