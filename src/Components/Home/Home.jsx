import React, { useState } from 'react';
import RegisteredCourses from './RegisteredCourses';
import './Home.css'
import Nav from './Nav';
import Slider from './Slider';
import CompletedCourse from './CompletedCourse';
import RecomendedCourse from './RecomendedCourse';
import Footer from './Footer';

const Home =  ()=> {

  return (
    <div className='Home-container'>
      <Nav/>
      <Slider/>
      <RegisteredCourses/>
      <CompletedCourse/>
      <RecomendedCourse/>
      <Footer/>
    </div>
  );
}

export default Home