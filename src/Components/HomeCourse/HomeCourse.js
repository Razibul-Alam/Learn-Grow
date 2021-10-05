import React, { useContext } from 'react';
import { coursesContext } from '../../App';

import InvidualCourse from './../Single-Home-course/InvidualCourse';

const HomeCourse = () => {
    const[courses]=useContext(coursesContext)
    return (
        <>
        <h2>Popular Courses</h2>
        <hr className="w-25"/>
        <div className='row my-5'>
         {courses.slice(0,4).map(course=><InvidualCourse course={course}/>)}   
        </div>
        </>
    );
};

export default HomeCourse;