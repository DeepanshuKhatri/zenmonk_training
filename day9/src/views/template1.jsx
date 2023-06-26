import { Avatar } from 'antd';
import React from 'react'
import { PlusOutlined,DeleteOutlined } from "@ant-design/icons";


const template1 = (props) => {
  const personal = props.personal;
  return (
    <div className='temp1-container'>
        <div className="personal-details-temp1"> 
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

export default template1