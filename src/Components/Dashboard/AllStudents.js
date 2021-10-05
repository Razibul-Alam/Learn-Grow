import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const AllStudents = () => {
    const [students,setStudents]=useState([])
    return (
        <Table striped bordered hover size="sm" className="mt-5">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Course</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>mark1234@gmail.com</td>
      <td>English Spoken
      </td>
      <td>
          <Button className="btn btn-danger">Remove
          </Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>jacob@gmail.com</td>
      <td>Cartoon Animation</td>
    </tr>
  </tbody>
</Table>
    );
};

export default AllStudents;