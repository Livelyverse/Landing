import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap';
import { inputValidation } from '../Util/Validation';
import Cookies from 'universal-cookie';
import { SentContactMessage } from '../../API/Contact';


const ContactUsSection = () => {
    
    const [msg , setMsg] = useState('');
    const [email , setEmail] = useState('');
    const [finalMessage, setFinalMessage] = useState('')

    const noError = {msg : false , email : false , all : false};
    const [errors , setErrors] = useState({msg : false , email : false , all: false});

    const tmp = noError;
    const Cookie = new Cookies();
    const user = Cookie.get('userName');

    const validation = () => {
        if(!inputValidation(email , 'email')){
            tmp.email = true;
            tmp.all = true;
        }else{ tmp.email = false ; tmp.all = false}
        if(msg.length === 0){
            tmp.msg = true;
            tmp.all = true
        } else{ tmp.msg = false; tmp.all = false}

        setErrors(tmp)
    }


    const sendMessage =() => {
        validation();
        if(!tmp.all){
            SentContactMessage({email , message : msg , name: (user === undefined || user === null) ? 'Guest' : user}).then(res=> {
                setFinalMessage('Your Message Sent!!');
                setMsg('');
                setEmail('');
            }).catch(err => {
                console.log(err)
            })
        }
    }
    return(
    <Container className="mt90px" fluid>
        <Row className="title">
            <h1>Contact Us</h1>
        </Row>
        <Row >
            <div className="contact-us-container mt60px">
                <Form className='homeContactUs'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder='Your Message' value={msg} onChange={(e) => setMsg(e.target.value)} className={errors.msg ? 'error' : ''} />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? 'error' : ''}/>

                       
                        <div className={`button`} onClick={sendMessage}> Send </div>
                    </Form.Group>
                    <span className='finalMessage'> {finalMessage} </span>
                    
                </Form>
            </div>
        </Row>
    </Container>
)};

export default ContactUsSection;