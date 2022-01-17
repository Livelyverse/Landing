import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getUserProfile } from "../../API/Profile";
import MobileContainer from "../Basic/MobileContainer";
import Cookies from "universal-cookie";
import UserData from "../DashboardData/UserData";

import firstname from './../../img/profile/firstname.png';
import lastname from './../../img/profile/lastname.png';
import username from './../../img/profile/username.png';
import email from './../../img/profile/email.png';
import wallet from './../../img/dashboard/balance.png'


const UserProfile = () => {
    const [data , setData] = useState([])

    const Cookie = new Cookies();
    const add = Cookie.get('address');

    useEffect(()=> {
        getUserProfile().then(res=> {console.log(res.data); setData(res.data)}).catch(err => console.log(err));
    }, [data])

    
    return(
        <div className="userProfile">
            <MobileContainer className="dashboardData">
                <Row>
                    <Col xs={12} lg={6}>
                        <UserData type={'common'}  icon={username} title={"UserName"}  value={data?.username}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'common'}  icon={email} title={"Email"}  value={data?.email}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'common'}  icon={firstname} title={"First Name"}  value={data?.firstname}/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <UserData type={'common'}  icon={lastname} title={"Last Name"}  value={data?.firstname}/>
                    </Col>
                    
                    <Col xs={12} lg={6}>
                        <UserData type={'common'}  icon={wallet} title={"wallet"}  value={data?.walletAddress}/>
                    </Col>
                </Row>
                
            </MobileContainer>
        </div>
    )

}
export default UserProfile;