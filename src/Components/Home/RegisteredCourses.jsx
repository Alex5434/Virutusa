import React from 'react'
import reg from './List'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import './Home.css'
import { width } from '@mui/system';


const RegisteredCourses = () => {
  console.log(reg);
  return (
    <div className='res'>
      <h2>Registered Course</h2>
      {
        reg.map(item=>{
          if(item.porgress>0  && item.porgress!=100){
              return(
                <div className="course">
                  <div className="cou-detail">
                    <div className='dec'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                    <ProgressBar className='w-100' now={item.porgress} />
                  </div>
                  <Button className='h-75 w-25'>Continue</Button>
                </div>

              )
            }
          
        })
      }
    </div>
  )
}

export default RegisteredCourses