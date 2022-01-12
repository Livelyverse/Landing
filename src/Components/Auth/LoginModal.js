import BasicModal from './../Basic/BasicModal';
import AuthInput from './../Basic/AuthInput';
import {Form} from 'react-bootstrap';
import Button from '../Button';

const LoginModal = (props) => {
    const {show , onHide} = props;

    return(
        <BasicModal title="Sign In" show={show} onHide={onHide} >
            <Form>
                <AuthInput title="UserName :" controlId="SignInForm.UserName" type="text" placeholder="User Name" msg=""/>
                <AuthInput title="Password :" controlId="SignInForm.Password" type="password" placeholder="Password" msg=""/>
            </Form>
            <Button type="color" className="formBtn"> Sign In </Button>
        </BasicModal>
    )
}

export default LoginModal;