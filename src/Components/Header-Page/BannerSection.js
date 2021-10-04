import React from 'react';
import { Button } from 'react-bootstrap';

const BannerSection = () => {
    return (
        <>
        <div className='row align-items-center justify-content-around mt-5'>
          <div className='col-lg-6'>
              <h2>Come Learn With Us</h2>
              <h5>Become an instructor and change <br /> lives — including your own</h5>
              <Button variant="primary" size="lg">
      Get Started
    </Button>
              </div>  
              <div className="col-lg-6">
                  <div>
                  <img src="https://cdn.pixabay.com/photo/2017/03/09/09/15/learn-2128978_1280.jpg" alt="" className="img-fluid" />
                  </div>
              </div>
        </div>
        </>
    );
};

export default BannerSection;