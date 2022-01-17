import BasicModal from './../Basic/BasicModal';
import AuthInput from './../Basic/AuthInput';
import {Form} from 'react-bootstrap';
import Button from '../Button';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Login } from '../../API/Auth';
import { inputValidation } from '../Util/Validation';
import { useHistory } from 'react-router-dom';

const LoginModal = (props) => {
    const {show , onHide , toggle} = props;

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const noError = {userName : false , password : false , all: false};
    const [errors , setErrors] = useState({userName : false , password : false, all: false});

    const [generalMsg , setGeneralMsg] = useState('');

    const tmp = noError;
    const Cookie = new Cookies();

    const history = useHistory();
    
    const validation = () => {
        if(!inputValidation(userName , 'userName')){
            tmp.userName = true;
            tmp.all = true;
        }else  {tmp.userName = false; tmp.all = false}
        if(!inputValidation(password , 'password')){
            tmp.password = true;
            tmp.all = true;
        } else{tmp.password = false; tmp.all = false}
        
        setErrors(tmp)
    }

    const loginUser = () => {
        validation();
        if(!tmp.all){
            Login({username : userName , password : password}).then(res=> {
                console.log(res);
                Cookie.set('auth' , res?.data?.access_token);
                Cookie.set('userName' , userName);
                Cookie.set('confirmed' , true);
                Cookie.set('refresh' , res?.data?.refresh_token);
                onHide()
                history.push('/dashboard')
            }).catch(err=> {
                console.log(err?.response)
                if(err?.response?.data?.message?.length > 0){
                    setGeneralMsg(err?.response?.data?.message)
                    setPassword('')
                    setUserName('')
                }
            })
        }
    }


    return(
        <BasicModal title="Sign In" show={show} onHide={onHide} >
            <Form>
                <AuthInput 
                title="UserName :" 
                controlId="SignInForm.UserName" 
                type="text" 
                placeholder="User Name" 
                msg=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                error={errors.userName}
            />
                <AuthInput 
                title="Password :" 
                controlId="SignInForm.Password" 
                type="password" 
                placeholder="Password" 
                msg=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
            />
            </Form>
            <span className='generalFormMsg'> {generalMsg} </span>
            <div style={{marginTop:'20px'}}> If you don't have an account, Please <strong style={{color:'#66DAE9' , cursor:'pointer'}}  onClick={toggle}> Register </strong>  first.</div>
            <Button type="color" className="formBtn" onClick={loginUser}> Sign In </Button>
        </BasicModal>
    )
}

export default LoginModal;