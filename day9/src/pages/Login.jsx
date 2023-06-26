import React, { useState } from 'react'
import {Form, Input, Button} from 'antd'
import '../assets/styles/styles.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/slice/authSlice'

const Login = () => {
    const navigate = useNavigate();
    const selector = useSelector((state)=> state.auth.user);
    // console.log(selector)
    const [id, setId] = useState(0);
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch();
    

    function submit(){
        if(number>1000000000 && number <10000000000){
            // if(!checkIfPresent()){
            //     const newUser = {
            //         id: id+1,
            //         number:number}
            //     }
                dispatch(addUser(number))
                // setId(id+1);
            console.log(selector)
            console.log("Navigating in submit")
            navigate('/otp')
        }
    }

  return (
    <div className='login-container'>
        <div className="login-form">
            <Form layout='vertical'>
                <Form.Item label='Enter Phone Number'
                name="number"
                rules={[
                    {
                        required:true,
                        message:'Please Enter Number'
                    },
                    {
                        type:number,
                        message:"Enter digits 0-9"
                    },
                    {
                        len:10,
                        message:'Enter Valid Number'
                    }
                ]}>
                    <Input className='input' onChange={e=> setNumber(e.target.value)} type='number' controls={false}/></Form.Item>
                <Form.Item><Button type="primary" htmlType="submit" onClick={submit}>Submit</Button></Form.Item>
            </Form>
        </div>
        <div className="image"></div>
    </div>
  )
}

export default Login