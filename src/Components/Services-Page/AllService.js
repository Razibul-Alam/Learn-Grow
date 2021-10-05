import React, { useContext, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { coursesContext } from '../../App';
import InvidualCourse from './../Single-Home-course/InvidualCourse';

const AllService = () => {
    const[courses]=useContext(coursesContext)
    const[showButton,setShowButton]=useState(true)
    return (
        <>
        <div className="w-50 m-auto mt-5">
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Course"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2" className="text-danger">Search</InputGroup.Text>
  </InputGroup>
        </div>
        <h2 className='text-success text-center mt-5'>All services</h2>
        <hr className='w-25 m-auto text-danger' />
            <div className='row my-5 g-4'>
         {courses.map(course=><InvidualCourse course={course} showButton={showButton}/>)}   
         </div>
        </>
    );
};

export default AllService;