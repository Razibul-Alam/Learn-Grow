import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddCourses = () => {
    return (
      <>
      
        <Form className="mt-5">
        <h2 className="text-primary mb-3">Add Courses</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="Text" placeholder="Enter Course Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="Text" placeholder="Enter Tutor Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="file" placeholder="Upload" />
        </Form.Group>
        <Button variant="primary">
          Submit
        </Button>
      </Form>
      </>
    );
};

export default AddCourses;