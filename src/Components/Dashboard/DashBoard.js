import React, { useState } from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';
import AddCourses from './AddCourses';
import './DashBoard.css'
import SoldCourses from './SoldCourses';
import Privacy from './Privacy';
import AllStudents from './AllStudents';
const DashBoard = () => {
    const[show,setShow]=useState(0)
    return (
    <>
    <section className='row'>
        <div className="bg-dark dashboard col-lg-2">

     <div className="d-flex justify-content-center mt-2">
     <ButtonGroup vertical>
     <Button className='mt-3'  onClick={()=>setShow(0)}>Student Management</Button>
  <Button className='mt-3'onClick={()=>setShow(3)}>Add Course</Button>
  <Button className='mt-3'  onClick={()=>setShow(2)}>Sold Items</Button>
  <Button className='mt-3'  onClick={()=>setShow(1)}>Privacy & Settings</Button>
</ButtonGroup>
     </div>
        </div>
        <div className="col-lg-7">
            {show<1&&<AllStudents/>}
            {show>0&&show<2&&<Privacy/>}
            {show>1&&show<3&&<SoldCourses/>}
            {show>2&&<AddCourses/>}
        </div>
        </section>
        </>
    );
};

export default DashBoard;