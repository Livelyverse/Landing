import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import PartnerDetails from "../Components/PartnersCom/PartnerDetails";


const Partner = function(props){
    console.log(props);
    const {name} = useParams();

    return(
        <Layout containerClassName={'App'} menuActive={1}>
            <PageTitle title={""} />
            <PartnerDetails name = {name} />
        </Layout>
    )
}

export default Partner;