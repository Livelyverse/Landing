import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getUserProfile, UpdateUserProfile } from "../../API/Profile";
import MobileContainer from "../Basic/MobileContainer";
import Cookies from "universal-cookie";

import UserAvatar from "./UserAvatar";
import UserFormData from "./UserFormData";


const UserProfile = () => {
    const Cookie = new Cookies();
    const add = Cookie.get('address');
    const userName = Cookie.get('userName');

    const [data , setData] = useState([])
    const [load , setload] = useState(false);
    const [userData , setUserData] = useState({id:'' , firstname : '' , lastname: '' , userName : '' , walletAddress : ''})
   
    useEffect(()=> {
        getUserProfile(userName).then(res=> {
            console.log(res.data); 
            setData(res.data);
            const userDatatemp = {
                id: res.data.id,
                firstname : res.data.firstname === null ? '' : res.data.firstname,
                lastname : res.data.lastname === null ? '' : res.data.lastname,
                username : res.data.username,
                walletAddress : add ? add : res.data.walletAddress === null ? '': res.data.walletAddress ,     
            }
            if(res.data.walletAddress === '' || res.data.walletAddress === null){
                UpdateUserProfile(userDatatemp).then(result=> console.log(result)).catch(error => console.log(error))
            }
            setUserData(userDatatemp);
            setload(true);

        }).catch(err => console.log(err));
        
    }, [])


    const updateUserData = () => {
        UpdateUserProfile(userData).then(result=> console.log(result)).catch(error => console.log(error))
    }

    if(load){
        return(
            <div className="userProfile">
                <MobileContainer className="dashboardData">
                    <Row>
                        <Col xs={12} lg={2}>
                            <UserAvatar image={data?.imageUrl} />
                        </Col>
                        <Col xs={12} lg={10}>
                            <UserFormData title={'First Name'} value={userData.firstname} editable={true} onChange={(e)=> setUserData({...userData , firstname: e.target.value})} submit={updateUserData}/>
                            <UserFormData title={'Last Name'} value={userData.lastname} editable={true} onChange={(e)=> setUserData({...userData , lastname: e.target.value})} submit={updateUserData}/>
                            <UserFormData title={'Email'} value={data.email} />
                            <UserFormData title={'Wallet Address'} value={data.walletAddress}/>
                        </Col>
                    </Row>
                    
                </MobileContainer>
            </div>
        )
    }else{return(<></>)}
    

}
export default UserProfile;