import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
const InvidualCourse = ({course}) => {
    const{title,imgUrl,tutor,price}=course;
    return (
        <div className='col-lg-4 text-center'>
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
            <Button variant="primary">Buy Course</Button>
          </Card.Body>
        </Card>
      </CardGroup>
        </div>
    );
};

export default InvidualCourse;