import React from 'react'
import './CourseDetail.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
const CourseDetail = ({CourseData}) => {
     const {id} = useParams();
     const [newData] = CourseData.filter((item)=>item.id==id)
     const {name,data} = newData

     const [value , setValue] = useState(0)
     const [Info,setInfo] = useState(data)
     const {info} = Info[value]
     console.log(info[0].para[0])
  return (
    <div className='CourseDetail'>
      <h1 className='course-title'>{name}</h1>
      <div className="btn-container">
          {data.map((item,index)=>{
               const {id,name}= item
               return (
                    <button onClick={()=>setValue(index)} className='btn btn-primary' key={id}>{name}</button>
               )
          })}
      </div>
      <div className="detail-container">
        <h3>{info[0].head}</h3>
        <ul>
         {info[0].para.map((item,index)=>{
          return (
            <li className='para_list' key={index}>{item}</li>
          )
         })}
         </ul>
      </div>
    </div>
  )
}

export default CourseDetail
