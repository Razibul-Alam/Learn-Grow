import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <>
        <div className='row align-items-center justify-content-around mt-5'>
          <div className='col-lg-6 mb-2'>
              <div className='text-center'>
              <h2>Come Learn With Us</h2>
        <h5>Become a skilled person and change <br /> lives — including your own</h5>
              <Button as={Link}  to='/service' variant="primary" size="lg">
      Get Started
    </Button>
              </div>
              </div>  
              <div className="col-lg-6 mb-2">
                  <div className='w-75 m-auto'>
                  <img src="https://cdn.pixabay.com/photo/2017/03/09/09/15/learn-2128978_1280.jpg" alt="" className="img-fluid" />
                  </div>
              </div>
        </div>
        </>
    );
};

export default BannerSection;