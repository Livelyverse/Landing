import { Col, Container, Row } from "react-bootstrap";
import Cookies from "universal-cookie"
import MobileContainer from "../Basic/MobileContainer";
import WalletConnect from "../WalletConnect";
import UserData from "./UserData";

import lvl from './../../img/dashboard/lvl.png';
import balance from './../../img/dashboard/balance.png';
import trans from './../../img/dashboard/trans.png';
import wallet from './../../img/dashboard/wallet.png';
import buy from './../../img/buy.png';

const DashboardData = () => {
    const Cookie = new Cookies();

    return(
        <Container fluid className="dashboard">
            <MobileContainer className="dashboardData">
                <Row>
                    <Col xs={12} lg={6}>
                        {/* <a href="" onClick={(e)=> {
                            e.preventDefault(); 
                            var appWindow = window.open("metamask://www.ourdomain.com/files/12345","_blank");
                            setTimeout( function () {if (appWindow) {
                                appWindow.location ="http://www.ourdomain.com/buyourapp";
                                    }
                                    },1000);
                            }}> test mobile </a> */}
                        <UserData type={'balance'}  icon={balance} title={"Balance"} unit={"LVL"}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'value'}  icon={lvl} title={"LVL Value"} unit={"$"}/>
                    </Col>
                    <Col xs={12}>
                        <UserData type={'address'}  icon={wallet} title={"Wallet Address"} unit={""}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <UserData type={'table'} icon={trans} title={'Transaction List'} unit={''} />
                    </Col>
                </Row>
            </MobileContainer>
            <div className="buyToken">
                <Container>
                    <Row>
                        <Col xs={12} lg={9}>
                            <h3>Welcome to Lively World! To buy your tokens, send the desired amount to this address and send your screenshot and your transaction hash to our email.You will see your tokens in your user panel and wallet within 24 hours.</h3>
                        </Col>
                        <Col xs={12} lg={3} className="qr">
                            <img src={buy} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    )
}

export default DashboardData;