import React from "react";

import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import Departments from "../Components/Departments";

const Team = function(){
    return(
        <Layout containerClassName={'App'} menuActive={2}>
            <PageTitle title={'Transaction History'} />
        </Layout>
    )
}

export default Team;