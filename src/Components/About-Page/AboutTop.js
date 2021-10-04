import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const AboutTop = () => {
    return (
        <>
        <h3 classname='text-center underline'>About Us</h3>
        <div className='row align-items-center my-5'>
        <div className="col-lg-6">
                  <div>
                  <img src="https://cdn.pixabay.com/photo/2017/03/09/09/15/learn-2128978_1280.jpg" alt="" className="w-75" />
                  </div>
              </div>
          <div className='col-lg-6'>
              <h2>We guide projects and organizations in making the right decisions.</h2>
          <p>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost. The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.</p>
          <ListGroup variant="flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
              <Button variant="primary" size="lg">
      Get Started
    </Button>
              </div> 
        </div>
        </>
    );
};

export default AboutTop;