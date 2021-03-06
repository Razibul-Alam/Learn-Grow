import React, { useContext, useState } from 'react';
import { coursesContext } from '../../App';

import InvidualCourse from './../Single-Home-course/InvidualCourse';

const HomeCourse = () => {
    const[courses]=useContext(coursesContext)
    const[showButton,setShowButton]=useState('show')
    return (
        <>
        <h2>Popular Courses</h2>
        <hr className="w-25"/>
        <div className='row my-5'>
         {courses.slice(0,4).map(course=><InvidualCourse course={course} show={showButton}/>)}   
        </div>
        </>
    );
};

export default HomeCourse;