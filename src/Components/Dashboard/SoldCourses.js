import React, { useContext, useState } from 'react';
import { coursesContext } from '../../App';
import InvidualCourse from './../Single-Home-course/InvidualCourse';

const SoldCourses = () => {
    const[courses]=useContext(coursesContext)
    const[showButton,setShowButton]=useState(false)
    
    return (
        <div className='row my-5'>
        {courses.slice(6,9).map(course=><InvidualCourse course={course} showButton={showButton}/>)}   
       </div>
    );
};

export default SoldCourses;