import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const AddStudent = ({students,setStudents}) => {
    const[id,setId]=useState(null)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [course,setCourse]=useState('')
    
    const studentDetails={
        id:id,name:name,email:email,course:course
    }
    // const [studentInfo,setStudentInfo]=useState({})
    console.log(students)

    const getNumber=(e)=>{
setId(e.target.value)
    }
    const getName=(e)=>{
setName(e.target.value)
    }
    const getEmail=(e)=>{
setEmail(e.target.value)
    }
    const getCourse=(e)=>{
setCourse(e.target.value)
    }
    const handleSubmit=()=>{
      if (name&&id&&email&&course) {
        setStudents([...students,studentDetails]) 
      }else{
          alert('give input')
      }
    }
    return (
        <>
      
        <Form className="mt-5">
        <h2 className="text-primary mb-3">Add Student</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" onBlur={getNumber} placeholder="id" required="required" />
          <Form.Control type="Text" className='mt-3' onBlur={getName} placeholder="Student Name" required="required" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="Text" onBlur={getEmail}  placeholder="Email" required="required" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" onBlur={getCourse}  placeholder="Course" required="required"  />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} className="form-control">
          Submit
        </Button>
      </Form>
      </>
    );
};

export default AddStudent;