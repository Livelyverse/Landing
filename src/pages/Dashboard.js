import React, { useEffect, useState } from "react";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import DashboardData from "../Components/DashboardData";
import { getUserName } from "../Components/Util/helper";

import loading from './../img/loading.gif';

const Dashboard = function(){

    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={-1}>
                <PageTitle title={getUserName() +  "'s Planet"} />
                <DashboardData />
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
   
}

export default Dashboard;