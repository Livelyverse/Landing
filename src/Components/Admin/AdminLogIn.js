import React, { useState } from "react";
import BasicModal from './../Basic/BasicModal';
import { Form } from 'react-bootstrap';
import AuthInput from "../Basic/AuthInput";
import Button from "../Button";
import { inputValidation } from "../Util/Validation";
import { Login } from "../../API/Auth";
import Cookies from "universal-cookie";
import { getUserProfile } from "../../API/Profile";
import { CreatePastUserCookie, IsUserConfirmed } from "../Util/CookieManager";

const AdminLogIn = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const noError = { userName: false, password: false, all: false };
    const tmp = noError;
    const [errors, setErrors] = useState({ userName: false, password: false, all: false });
    const Cookie = new Cookies();

    const [generalMsg, setGeneralMsg] = useState('');

    const show = true;

    const validation = () => {
        if (!inputValidation(userName, 'userName')) {
            tmp.userName = true;
            tmp.all = true;
        } else { tmp.userName = false; tmp.all = false }
        if (!inputValidation(password, 'password')) {
            tmp.password = true;
            tmp.all = true;
        } else { tmp.password = false; tmp.all = false }
        setErrors(tmp)
    }

    const loginUser = () => {
        validation();
        if (!tmp.all) {

            Login({ username: userName, password: password }).then(res => {
                console.log(res);
                Cookie.set('auth', res?.data?.access_token);
                Cookie.set('userName', userName);
                const refresh = res?.data?.refresh_token;
                getUserProfile(userName).then(res => {
                    console.log(res);
                    CreatePastUserCookie(userName);
                    Cookie.set('refresh', refresh);
                    window.location.reload();
                }).catch(err => {
                    console.log(err);
                    if (err?.response?.status === 401) {
                        IsUserConfirmed(userName);
                    }
                })
            }).catch(err => {
                console.log(err?.response)
                if (err?.response?.data?.message?.length > 0) {
                    setGeneralMsg(err?.response?.data?.message)
                    setPassword('')
                    setUserName('')
                }
            })
        }
    }

    return (
        <div className="AdminLogInDiv">
            <BasicModal title="Admin Sign In" show={show}>
                <Form>
                    <AuthInput
                        title="Admin UserName :"
                        controlId="SignInForm.UserName"
                        type="text"
                        placeholder="Admin User Name"
                        msg=""
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        error={errors.userName}
                    />
                    <AuthInput
                        title="Admin Password :"
                        controlId="SignInForm.Password"
                        type="password"
                        placeholder="Admin Password"
                        msg=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                    />
                </Form>
                <span className='generalFormMsg'> {generalMsg} </span>
                <div style={{ marginTop: '20px' }}> If you don't have an account, Please <strong style={{ color: '#66DAE9', cursor: 'pointer' }}> Register </strong>  first.</div>
                <Button type="color" className="formBtn" onClick={loginUser}> Sign In </Button>
            </BasicModal>
        </div>
    )
}

export default AdminLogIn;