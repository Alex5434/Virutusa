import React from 'react'
import reg from './List'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import './Home.css'
import { width } from '@mui/system';


const CompletedCourse = () => {
  console.log(reg);
  return (
    <div className='res'>
      <h2>Completed Course</h2>
      {
        reg.map(item=>{
          if(item.completed){
              return(
                <div className="course">
                  <div className="cou-detail">
                    <div className='dec'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                  </div>
                  <Button className='h-100 w-25 btn-success'>Completed</Button>
                </div>

              )
            }
          
        })
      }
    </div>
  )
}

export default CompletedCourse