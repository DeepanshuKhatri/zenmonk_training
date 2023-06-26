import React from 'react'
import { Avatar } from 'antd';

const template3 = (props) => {
  const personal = props.personal;
  return (
    <div className='temp3-container'>
        <div className="personal-details-temp3"> 
        <Avatar className='avatar'/>
        <h2>Personal Details</h2>
        <h3>Temp1</h3>
        </div>
        <div className="resume-page">
                <div className="personal-details-left">
                <h1>{personal?.fname} {personal?.lname}</h1>
                <h2>Full Stack Developer</h2>
                </div>
                <div className="personal-details-right">
                    <p>{personal?.email}</p>
                    <p>{personal?.phone} </p>
                </div>
                <h2>About</h2>
                    <p>{personal?.yourself}  </p>
            </div>
        </div>
  )
}

export default template3