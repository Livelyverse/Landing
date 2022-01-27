
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ChangePassword, LogoutAllUsers } from '../../API/Auth';
import AuthInput from '../Basic/AuthInput';
import { inputValidation } from '../Util/Validation';
import changep from './../../img/changepwhite.png';


const ChangePasswordInput = ({title , value , onChange , error , msg , placeholder , id}) => {

    return(
        <Row className='changePasswordInputRow'>
            <Col xs={6} lg={3} className='changePasswordInputRowTitle'>
                {title}
            </Col>
            <Col xs={6} lg={9} className='changePasswordInputRowInput'>
                <AuthInput 
                    title={''}
                    controlId={id} 
                    type="password" 
                    placeholder={placeholder}
                    msg={msg}
                    value={value}
                    onChange={onChange}
                    error={error}
                />
            </Col>
        </Row>
    )
}


const ChangePass = () => {

    const [oldPass , setOldPass] = useState('');
    const [newPass , setNewPass] = useState('');
    const [newPassV , setNewPassV] = useState('');

    const [generalMsg , setGeneralMsg] = useState('');

    const noError = {password : false , newPass : false , newPassV : false , all : false};
    const [errors , setErrors] = useState({password : false , newPass : false , newPassV : false , all : false});


    const Cookie = new Cookies();
    const userName = Cookie.get('userName');
    const history = useHistory();

    useEffect(()=> {
        if(!userName){
            LogoutAllUsers();
            history.push('/');
        }
        
    },[])

    const tmp = noError;
    const Validation = () => {
        if(!inputValidation(oldPass , 'password')){
            tmp.password = true;
            tmp.all = true;
        }else  {tmp.password = false; tmp.all = false}
        if(!inputValidation(newPass , 'password')){
            tmp.newPass = true;
            tmp.all = true;
        } else{tmp.newPass = false; tmp.all = false}
        if(!inputValidation(newPassV , 'password') && newPassV === newPass){
            tmp.newPassV = true;
            tmp.all = true;
        } else{tmp.newPassV = false; tmp.all = false}
        setErrors(tmp)
        console.log('here');
    }

    const SubmitChangePassword = () =>{
        Validation();
        if(!tmp.all){
            const data = {
                username : userName,
                oldPassword : oldPass,
                newPassword : newPass,
            };
            ChangePassword(data).then(res => {
                history.push('/profile');
            }).catch(err => {
                if(err.response.status === 403){
                    setGeneralMsg(err?.response?.data?.message);
                    setOldPass('');
                    setNewPassV('');
                    setNewPass('');
                }
            })
        }
    }

    return(
        <>
            <div  className='changepTitle'>
                Change Password 
                <img src={changep} />
            </div>
            <Form className='changePasswordForm'>
                <ChangePasswordInput 
                    title={'Current Password'}  
                    value={oldPass}
                    onChange={(e)=> setOldPass(e.target.value)}
                    error={errors.password}
                    msg={'Your Current Password'}
                    placeholder={'Current Password'}
                    id={'ChangePassword.currentPassword'}
                />
                <ChangePasswordInput 
                    title={'New Password'}  
                    value={newPass}
                    onChange={(e)=> setNewPass(e.target.value)}
                    error={errors.newPass}
                    msg={'8 characters at least - include Upper and Lower case and digit'}
                    placeholder={'New Password'}
                    id={'ChangePassword.newPassword'}

                />
                <ChangePasswordInput 
                    title={'New Password Confirm'}  
                    value={newPassV}
                    onChange={(e)=> setNewPassV(e.target.value)}
                    error={errors.newPassV}
                    msg={'8 characters at least - include Upper and Lower case and digit'}
                    placeholder={'New Password Confirm' }
                    id={'ChangePassword.currentPasswordConfirm'}
                />
                <Row style={{marginBottom:'20px' , paddingLeft:'50px'}}> 
                    <Col lg={3} xs={12}></Col>
                    <Col lg={9} xs={12}>
                        <span className='generalFormMsg'> {generalMsg} </span>
                    </Col>
                </Row>
                <Row style={{paddingLeft:'60px'}}>
                    <Col lg={3} xs={12}></Col>
                    <Col lg={9} xs={12} style={{paddingLeft:'0px' , display:'flex'}}>
                        <div className='changePasswordBtn' onClick={SubmitChangePassword}>
                            Save
                        </div>
                        <div className='changePasswordBtn cancel' onClick={() => {
                            history.push('/profile');
                        }}>
                            Cancel
                        </div>
                    </Col>
                </Row>
                
            </Form>
            
        </>
    )
}
export default ChangePass;