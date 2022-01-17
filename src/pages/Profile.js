import React, { useEffect, useState } from "react";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import UserProfile from "../Components/UserProfile/Index";
import { getUserName } from "../Components/Util/helper";

import loading from './../img/loading.gif';

const Profile = function(){

    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={-1}>
                <PageTitle title={getUserName() +' Profile'} />
                <UserProfile />
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
   
}

export default Profile;