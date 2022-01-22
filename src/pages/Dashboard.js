import React, { useEffect, useState } from "react";

import Layout from "../Components/Basic/Layout";
import PageBorderTitle from "../Components/Common/PageBorderTitle";
import DashboardData from "../Components/DashboardData";
import { getUserName } from "../Components/Util/helper";

import loading from './../img/loading.gif';
import dashboard from './../img/dashboardIcon.png';
const Dashboard = function(){

    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={-1}>
                <PageBorderTitle title={getUserName() +  "'s Planet"} icon={dashboard}>
                    <DashboardData />
                    
                </PageBorderTitle>
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
   
}

export default Dashboard;