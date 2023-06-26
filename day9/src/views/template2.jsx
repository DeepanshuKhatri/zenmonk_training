import React from 'react'
import { Avatar, Typography } from 'antd';


const {Title, Text} = Typography;

const template2 = (props) => {
  const personal = props.personal;
  return (
    <div className='temp2-container'>
        {/* <div className="personal-details-temp2"> 
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
            </div> */}
            <div className="personal-details-temp2">
            <Avatar className='avatar'/>
              <Text className='personal-details'>Personal Details</Text>
              <div className="personal-info">
                <Text className='name'>{personal?.fname} {personal?.lname}</Text>
              </div>
            </div>
        </div>
  )
}

export default template2