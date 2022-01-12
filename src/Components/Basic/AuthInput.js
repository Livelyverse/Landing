import { Form } from "react-bootstrap";

const AuthInput = (props) => {
    const {title , controlId , type , placeholder , msg , value , onChange , error} = props;
    // console.log(title + ' : ' + error);
    return(
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{title}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} className={error ? "error" : ''} />
            <Form.Text className="text-muted">
                {msg}
            </Form.Text>
        </Form.Group>
    )
}

export default AuthInput;