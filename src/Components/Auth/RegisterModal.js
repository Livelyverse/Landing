import BasicModal from './../Basic/BasicModal';
import AuthInput from './../Basic/AuthInput';
import {Form, Row, ThemeProvider} from 'react-bootstrap';
import Button from '../Button';
import { useState } from 'react';

import ok from './../../img/ok.png';
import { inputValidation } from '../Util/Validation';


const RegisterModal = (props) => {
    const {show , onHide} = props;
    const [emailverify , setEmailVerify] = useState(false);
    const [verify , setVerify] = useState(false);
    
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [vpassword , setvPassword] = useState('');
    const [email , setEmail] = useState('');

    const [confirmCode , setConfirmCode] = useState('');

    const noError = {userName : false , email : false , password : false , confirm:false , vpassword : false , all: false};
    const [errors , setErrors] = useState({userName : false , email : false , password : false , confirm:false , vpassword : false , all: false});


    const tmp = noError;
    
    const validation = () => {


        if(!inputValidation(userName , 'userName')){
            tmp.userName = true;
            tmp.all = true;
            console.log('bad1')
        }else  {tmp.userName = false}
        if(!inputValidation(email , 'email')){
            tmp.email = true;
            tmp.all = true;
            console.log('bad2')
        }else{ tmp.email = false}
        if(!inputValidation(password , 'password')){
            tmp.password = true;
            tmp.all = true;
            console.log('bad3')
        } else{tmp.password = false}
        if(password !== vpassword && password.length === 0){
            tmp.vpassword = true;
            tmp.all = true
            console.log('bad4')
        } else{ tmp.vpassword = false}
        
        console.log(tmp)
        setErrors(tmp)
        console.log(errors);
    }

    const registerToVerify = () =>{
        validation()
        if(!tmp.all){
            // setErrors(noError);
            onHide();
            setEmailVerify(true);
        }
    }
    const finalVerify = () => {
        setEmailVerify(false);
        setVerify(true)
    }
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
                    msg="6 characters at least" 
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
                    error={errors.password}
                    />
                </Form>
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
                </Form>
                <Button type="color" className="formBtn" onClick={finalVerify}> Verify </Button>
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