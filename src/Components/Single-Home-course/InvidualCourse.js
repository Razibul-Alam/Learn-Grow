import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
const InvidualCourse = ({course,showButton}) => {
    const{title,imgUrl,tutor,price}=course;
    return (
        <div className='col-lg-3'>
             <CardGroup>
        <Card>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             <h6>{tutor}</h6>
            </Card.Text>
            <Card.Text>
             <h6>Price: {price}</h6>
            </Card.Text>
            {showButton&&<Button variant="primary">Enroll</Button>}
          </Card.Body>
        </Card>
      </CardGroup>
        </div>
    );
};

export default InvidualCourse;