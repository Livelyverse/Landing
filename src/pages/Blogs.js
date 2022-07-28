import React, { useState, useEffect } from "react";
 
import Layout from "../Components/Basic/Layout";
import PageTitle from "../Components/Common/PageTitle";
import MediumSlider from "../Components/MediumSlider";

import loading from "../img/loading.gif"

const Blogs = () => {

    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    // return (
    //     <Slider />
    // )
    if (loaded) {
        return (
            <Layout containerClassName={'App'} menuActive={4}>
                <PageTitle title={'Our Blogs'} />
                <MediumSlider />
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
}

export default Blogs;