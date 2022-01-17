import BasicModal from './../Basic/BasicModal';
import AuthInput from './../Basic/AuthInput';
import {Form, Row} from 'react-bootstrap';
import Button from '../Button';
import { useEffect, useState } from 'react';

import ok from './../../img/ok.png';
import { inputValidation } from '../Util/Validation';
import { MailCodeVerified, Register } from '../../API/Auth';
import CountDown from '../Basic/CountDown';
import Cookies from 'universal-cookie';

import { useHistory } from 'react-router-dom';


const RegisterModal = (props) => {
    const {show , onHide , toggle} = props;
    const [emailverify , setEmailVerify] = useState(false);
    const [verify , setVerify] = useState(false);
    
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [vpassword , setvPassword] = useState('');
    const [email , setEmail] = useState('');

    const [generalMsg , setGeneralMsg] = useState('')

    const [confirmCode , setConfirmCode] = useState('');

    const noError = {userName : false , email : false , password : false , confirm:false , vpassword : false , all: false};
    const [errors , setErrors] = useState({userName : false , email : false , password : false , confirm:false , vpassword : false , all: false});


    const tmp = noError;
    const Cookie = new Cookies();
    const isConfirmed = Cookie.get('confirm');
    const history = useHistory();
    
    const validation = () => {
        if(!inputValidation(userName , 'userName')){
            tmp.userName = true;
            tmp.all = true;
        }else  {tmp.userName = false; tmp.all = false}
        if(!inputValidation(email , 'email')){
            tmp.email = true;
            tmp.all = true;
        }else{ tmp.email = false; tmp.all = false}
        if(!inputValidation(password , 'password')){
            tmp.password = true;
            tmp.all = true;
        } else{tmp.password = false; tmp.all = false}
        if(password !== vpassword && password.length === 0){
            tmp.vpassword = true;
            tmp.all = true
        } else{ tmp.vpassword = false; tmp.all = false}
        
        setErrors(tmp)
    }

    const registerToVerify = () =>{
        validation()
        if(!tmp.all){
            Register({username : userName , password : password , email : email}).
                then(res => {
                    Cookie.set('auth', res?.data?.access_token);
                    Cookie.set('userName' , userName);
                    Cookie.set('confirmed' , false);
                    Cookie.set('refresh' , '');
                    onHide();
                    setGeneralMsg('')
                    setEmailVerify(true);
                }).catch(err=>{
                    console.log(err.response)
                    if(err.response.data.message.length > 0){
                        setGeneralMsg(err.response.data.message)
                        setErrors({...errors , email : true , userName : true});
                        setPassword('')
                        setvPassword('')
                    }
                })
        }
    }

    const finalVerify = () => {
        MailCodeVerified({verifyCode : confirmCode}).then(res =>{ 
            console.log(res);
            Cookie.set('refresh' , res?.data?.refresh_token)
            Cookie.set('confirmed' , true)
            setEmailVerify(false);
            setVerify(true)
            history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            if(err.response.data.message.length > 0){
                setGeneralMsg(err.response.data.message)
                setErrors({...errors , confirm : true})
            }
        })
    }

    useEffect(()=>{
        if(isConfirmed === false){
            onHide();
            setEmailVerify(true);
        }
    } , [])
    return(
        <>
            <BasicModal title="Sign Up" show={show} onHide={onHide} >
                

                <Form>
                    <AuthInput 
                    title="UserName :" 
                    controlId="SignUpForm.UserName" 
                    type="text" 
                    placeholder="User Name" 
                    msg="6 characters at least" 
                    value={userName} 
                    onChange={(text)=> setUserName(text.target.value)} 
                    error={errors.userName}
                    />
                    <AuthInput 
                    title="Email :" 
                    controlId="SignUpForm.Email" 
                    type="email" 
                    placeholder="Your Email" 
                    msg="" 
                    value={email} 
                    onChange={(text) => setEmail(text.target.value)}
                    error={errors.email}
                    />
                    <AuthInput 
                    title="Password :" 
                    controlId="SignUpForm.Password1" 
                    type="password" 
                    placeholder="Password" 
                    msg="8 characters at least - include Upper and Lower case and digit" 
                    value={password} 
                    onChange={(text) => setPassword(text.target.value)} 
                    error={errors.password}
                    />
                    <AuthInput 
                    title="Confirm Password :"
                    controlId="SignUpForm.Password2" 
                    type="password" 
                    placeholder="Password" 
                    msg="repeate your selected password" 
                    value={vpassword} 
                    onChange={(text) => setvPassword(text)} 
                    error={errors.vpassword}
                    />
                </Form>
                <span className='generalFormMsg'> {generalMsg} </span>
                <div style={{marginTop:'20px'}}> If you already have an account <strong style={{color:'#66DAE9' , cursor:'pointer'}}  onClick={toggle}> Login </strong> </div>
                <Button type="color" className="formBtn" onClick={registerToVerify}> Sign Up </Button>
            </BasicModal>


            <BasicModal title="Email Verification" show={emailverify} onHide={()=>{setEmailVerify(false)}}> 
                <Form>
                    <AuthInput 
                        title="Verification Code :" 
                        controlId="SignUpForm.Verification" 
                        type="text" 
                        placeholder="Verification Code" 
                        msg="The verification code is sent to your registeration Email" 
                        value={confirmCode}
                        onChange={(text) => setConfirmCode(text.target.value)}
                        error = {errors.confirm}
                    />
                    <CountDown limit={60}/>
                </Form>
                <span className='generalFormMsg'> {generalMsg} </span>
                <Button type='color'  className={`formBtn ${confirmCode.length > 0 ? '' : 'disable'}` } onClick={ confirmCode.length > 0 ? finalVerify : ''}> Verify </Button>
            </BasicModal>

            <BasicModal title="Email Verification" show={verify} onHide={()=>{setVerify(false)}}> 
                <Row className="justify-content-md-center verificationMessage">
                    <img src={ok} />
                    <div>
                        Your Account is Activated.
                    </div>
                </Row>
                
            </BasicModal>
        </>
    )
}

export default RegisterModal;