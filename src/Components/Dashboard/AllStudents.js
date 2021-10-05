import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddStudent from './AddStudent';

const AllStudents = () => {

  const removeStudent=(id)=>{
const remainStudents=students.filter(student=>student.id!==id)
setStudents(remainStudents)
  }
    const [students,setStudents]=useState([{id:1,name:'mark',email:'mark1232@gmail.com',course:'English Spoken'}])
    return (
      <>
    <AddStudent students={students} setStudents={setStudents}/>
        <Table striped bordered hover size="sm" className="mt-5">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Course</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
   {students.map(student=>{
     const{id,name,email,course}=student
     return(
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{course}
      </td>
      <td>
          <Button className="btn btn-danger" onClick={()=>{removeStudent(id)}}>Remove
          </Button>
      </td>
    </tr>
     )
   })}
  </tbody>
</Table>
</>
    );
};

export default AllStudents;