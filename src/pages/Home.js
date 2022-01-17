import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RegisterModal from '../Components/Auth/RegisterModal';

import Layout from '../Components/Basic/Layout';
import MobileContainer from '../Components/Basic/MobileContainer';
import TokenUtlitySection from '../Components/TokenUtiltySection';
import FifthSection from './../Components/FifthSection';
import FirstSection from './../Components/FirstSection';
import ForthSection from './../Components/ForthSection';
import SecondSection from './../Components/SecendSection';
import ThirdSection from './../Components/ThirdSection';
import loading from './../img/loading.gif';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const Home = function () {
    const [loaded , setLoaded] = useState(false)
    const [registerShow , setRegisterShow] = useState(false)

    const Cookie = new Cookies();
    const isConfirmed = Cookie.get('confirmed')
    const history = useHistory();

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return (
            <Layout containerClassName={'App'} menuActive={0}>
                <FirstSection />
                <SecondSection />
                <TokenUtlitySection />
                <MobileContainer className='registerSlogan'>
                    <Row>
                        <Col xs={12} lg={8}>
                            <h3>To buy your tokens, please Register and you’ll see the instructions how to buy and have Lively tokens...</h3>
                        </Col>
                        <Col xs={12} lg={4} className='registerBtn'>
                            <div onClick={()=> {  isConfirmed ? history.push('./dashboard') : setRegisterShow(true)}}> Start Now </div>
                        </Col>
                    </Row>    
                </MobileContainer>
                <ThirdSection />
                <ForthSection />
                <FifthSection />
                <RegisterModal show={registerShow} onHide={()=> setRegisterShow(false)} />  
            </Layout>
            
        )
    }
    else{
        return(
            <div className='loading' style={{height:window.innerHeight}}>
                <img src={loading} />
            </div>
        )
    }
    
}

export default Home;