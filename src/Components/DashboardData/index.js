import { Col, Container, Row } from "react-bootstrap";
import Cookies from "universal-cookie"
import MobileContainer from "../Basic/MobileContainer";
import UserData from "./UserData";

import lvl from './../../img/dashboard/lvl.png';
import balance from './../../img/dashboard/balance.png';
import trans from './../../img/dashboard/trans.png';
import wallet from './../../img/dashboard/wallet.png';
import buy from './../../img/buy.png';
import ContactUsSection from "../ContactUs";


const DashboardData = () => {
    const Cookie = new Cookies();
    const add = Cookie.get('address');
    
    return(
        <Container fluid className="dashboard">
            <MobileContainer className="dashboardData">
                <Row>
                    <Col xs={12} lg={6}>
                        <UserData type={'address'}  icon={wallet} title={"Wallet"} unit={""}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'balance'}  icon={balance} title={"Balance"} unit={"LVL"}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'value'}  icon={lvl} title={"LVL Value"} unit={"$"}/>
                    </Col>
                </Row>
                <Row className="buyToken">
                    <Col xs={12} lg={9}>
                        <h3>Welcome to Lively World! To buy your tokens, send the desired amount to this address and send your screenshot and your transaction hash to our email.You will see your tokens in your user panel and wallet within 24 hours.</h3>
                    </Col>
                    <Col xs={12} lg={3} className="qr">
                        <img src={buy}  onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText('0x2344ccCA099F1060fbc299605A5E86E1f00690C1');
                        }} />
                        <small>For copy wallet address click </small>
                    </Col>
                </Row>
                <Row className="buyTutor">
                    <Col xs={12} lg={5}>
                        <h3>For having Lively in your wallet, Please Download the instructions.</h3>
                    </Col>
                    <Col xs={12} lg={7} className="dlBtn">
                        <Row >
                            <Col xs={4} >
                                <div className="btn" onClick={(e) => {e.preventDefault(); window.open('https://livelyplanet.io/docs/instructionsLVLEnglish.pdf')}}>
                                    English
                                </div>
                            </Col >
                            <Col xs={4} >
                            <div className="btn" onClick={(e) => {e.preventDefault(); window.open('https://livelyplanet.io/docs/instructionsLVLSpanish.pdf')}}>
                                Spanish
                                    
                                </div>
                            </Col>
                            <Col xs={4} >
                            <div className="btn" onClick={(e) => {e.preventDefault(); window.open('https://livelyplanet.io/docs/instructionsLVLItalian.pdf')}}>
                            Italian
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{textAlign:'center'}}>
                    <ContactUsSection notitle={true} intro={"Send Us your transaction Hash together with the address where you want yout LVL tokens to be sent"}/>
                </Row>
                <Row>
                    <Col>
                        <UserData type={'table'} icon={trans} title={'Transaction List'} unit={''}  />
                    </Col>
                </Row>
            </MobileContainer>
            
        </Container>
    )
}

export default DashboardData;