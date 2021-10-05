import React from 'react';
import { useParams } from 'react-router';
import BannerSection from './../Header-Page/BannerSection';
import HomeCourse from './../HomeCourse/HomeCourse';

const HomePage = () => {
    const{url}=useParams()
    console.log(url)
    return (
        <div>
           <BannerSection/> 
           <HomeCourse/>
        </div>
    );
};

export default HomePage;