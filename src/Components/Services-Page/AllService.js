import React, { useContext } from 'react';
import { coursesContext } from '../../App';
import InvidualCourse from './../Single-Home-course/InvidualCourse';

const AllService = () => {
    const[courses]=useContext(coursesContext)
    return (
        
            <div className='row my-5'>
         {courses.map(course=><InvidualCourse course={course}/>)}   
         </div>
        
    );
};

export default AllService;