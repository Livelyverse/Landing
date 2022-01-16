import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import PartnerDetails from "../Components/PartnersCom/PartnerDetails";

import loading from './../img/loading.gif';

const Partner = function(props){
    console.log(props);
    const {name} = useParams();
    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])
    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={1}>
                <PageTitle title={""} />
                <PartnerDetails name = {name} />
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
   
}

export default Partner;