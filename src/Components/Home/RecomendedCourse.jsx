import React from 'react'
import reg from './List'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import './Home.css'
import { width } from '@mui/system';


const RecomendedCourse = () => { 
    // const reg = (s)=>{
    //   console.log(s);
    // }

  return (
    <div className='res'>
      <h2>Recomended Course</h2>
      {
        reg.map(item=>{
          if(!(item.completed) && item.porgress==0){
            let name = item.title;
              return(
                <div className="course">
                  <div className="cou-detail">
                    <div className='dec'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
                  </div>
                  <Button className='h-100 w-25' >Register</Button>
                </div>

              )
            }
          
        })
      }
    </div>
  )
}

export default RecomendedCourse