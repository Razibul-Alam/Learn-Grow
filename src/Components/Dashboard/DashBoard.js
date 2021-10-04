import React, { useState } from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';
import AddCourses from './AddCourses';
import './DashBoard.css'
import SoldCourses from './SoldCourses';
import Privacy from './Privacy';
const DashBoard = () => {
    const[show,setShow]=useState(0)
    return (
    <>
    <section className='row'>
        <div className="bg-dark dashboard col-lg-3">

     <div className="d-flex justify-content-center mt-2">
     <ButtonGroup vertical>
  <Button className='mt-3'onClick={()=>setShow(0)}>Add Courses</Button>
  <Button className='mt-3'  onClick={()=>setShow(2)}>Sold Items</Button>
  <Button className='mt-3'  onClick={()=>setShow(1)}>Privacy & Settings</Button>
</ButtonGroup>
     </div>
        </div>
        <div className="col-lg-7">
            {show<1&&<AddCourses/>}
            {show>0&&show<2&&<Privacy/>}
            {show>1&&<SoldCourses/>}
        </div>
        </section>
        </>
    );
};

export default DashBoard;