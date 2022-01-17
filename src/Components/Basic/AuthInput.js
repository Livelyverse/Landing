import { Form } from "react-bootstrap";
import passv from './../../img/passv.png';
import passh from './../../img/passh.png';
import { useState } from "react";
 
const AuthInput = (props) => {
    const {title , controlId , type , placeholder , msg , value , onChange , error} = props;
    // console.log(title + ' : ' + error);
    const [passHide , setPassHide] = useState(true)
    const [passType , setPassType] = useState('password')
    return(
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{title}</Form.Label>
            <Form.Control type={type === 'password' ? passHide ? 'password' : 'text' : type} placeholder={placeholder} value={value} onChange={onChange} className={error ? "error" : ''} />
            {type === 'password' && <img src={passHide ? passv : passh} onClick={()=>{setPassHide(!passHide)}} />}
            <Form.Text className="text-muted">
                {msg}
            </Form.Text>
        </Form.Group>
    )
}

export default AuthInput;