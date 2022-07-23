import React from 'react'
import './CourseDetail.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { componentArray, useGlobalContext } from '../Context';
import { CourseButton } from './CourseData';
const CourseDetail = ({CourseData}) => {
  const {setValue} = useGlobalContext()
  const {id} = useParams()
  const {name} = CourseData[id-1]
  return (
    <div className='CourseDetail'>
     <h1 className='course-title'>{name}</h1>
        <div className="btn-container">
          {CourseButton.map((item,index)=>{
            return <button onClick={()=>setValue(index)} className="btn btn-primary" key={index}>{item}</button>
          })}
        </div>
        <div className="detail-container">
          {componentArray[id-1]}
        </div>
    </div>
  )
}

export default CourseDetail
