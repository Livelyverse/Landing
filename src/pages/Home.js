import React, { useEffect, useState } from 'react';

import Layout from '../Components/Basic/Layout';
import TokenUtlitySection from '../Components/TokenUtiltySection';
import FifthSection from './../Components/FifthSection';
import FirstSection from './../Components/FirstSection';
import ForthSection from './../Components/ForthSection';
import SecondSection from './../Components/SecendSection';
import ThirdSection from './../Components/ThirdSection';
import loading from './../img/loading.gif';


const Home = function () {
    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return (
            <Layout containerClassName={'App'} menuActive={0}>
                <FirstSection />
                <SecondSection />
                <TokenUtlitySection />
                <ThirdSection />
                <ForthSection />
                <FifthSection />
            </Layout>
            
        )
    }
    else{
        return(
            <div className='loading' style={{height:window.innerHeight}}>
                <img src={loading} />
            </div>
        )
    }
    
}

export default Home;