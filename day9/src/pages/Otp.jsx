import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();
    console.log(process.env.REACT_APP_OTP)
    function check(){
        if(otp==process.env.REACT_APP_OTP){
            console.log(true);
            navigate('/home')
        }else{
            console.log(false)
            navigate('/')
        }
    }
  return (
    <div>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    <Button onClick={check}>Submit</Button>
    </div>
  )
}

export default Otp