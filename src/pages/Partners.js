import React from "react";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import PartnersCom from "../Components/PartnersCom";

const Partners = function(){
    return(
        <Layout containerClassName={'App'} menuActive={1}>
            <PageTitle title={'Our Partners'} />
            <PartnersCom />
        </Layout>
    )
}

export default Partners;