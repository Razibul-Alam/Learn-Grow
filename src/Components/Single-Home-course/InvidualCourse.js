import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
const InvidualCourse = ({course}) => {
    const{title,imgUrl,tutor}=course;
    return (
        <div className='col-lg-4'>
             <CardGroup>
        <Card>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {tutor}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
        </div>
    );
};

export default InvidualCourse;