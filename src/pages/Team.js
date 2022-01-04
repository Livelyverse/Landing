import React from "react";

import { Container } from 'react-bootstrap';
import Footer from "../Components/Footer";
import FirstSection from '../Components/FirstSection';
import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import Departments from "../Components/Departments";

const Team = function(){
    return(
        <Layout containerClassName={'App'} menuActive={2}>
            <PageTitle title={'Our Team'} />
            <Departments />
        </Layout>
    )
}

export default Team;