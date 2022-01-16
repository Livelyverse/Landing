import React, { useEffect, useState } from "react";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import Departments from "../Components/Departments";

import loading from './../img/loading.gif';


const Team = function(){
    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])
    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={2}>
                <PageTitle title={'Our Team'} />
                <Departments />
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)

}

export default Team;