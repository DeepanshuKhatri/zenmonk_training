import React, { useRef, useState } from "react";
import "../assets/styles/login.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Checkbox, Button, Form } from "antd";
const { Title, Text } = Typography;
function Login() {
  const navigate = useNavigate();
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState();
  const index = useRef(0);
  let ind = 0;
  function checkIndex(ls){
    let flag = false;
    ls.forEach(element => {
      if(element.email==email && element.password==password){
        flag= true;
        return ;
      }else{index.current += 1;}
    });
    return flag;

  }
  function check(){
    const ls = JSON.parse(localStorage.getItem('details'))
    console.log(ls)
    
    if(checkIndex(ls)){
      // <Navigate replace to='/home'/>
      // const loggedIn = {name:ls[0].name}
      // localStorage.setItem('logged', JSON.stringify(loggedIn))
      navigate('/profile');
      console.log(true);
    }else{
      console.log(false);
      // console.log(ls, email)
      // console.log(ls[index.current-1], password)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="login">
            <div className="details">
              <Title level={1}>Welcome back</Title>
              <Text className="text-input">
                Welcome back! Please enter your details.
              </Text>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  label="Email"
                  name='email'
                  rules={[
                    {
                      required: true,
                      type:"email",
                      message: "Enter a valid email address!",
                    },
                  ]}
                >
                  <Input className="input" onChange={e=>setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item
                  label="Password"
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Password",
                    },
                  ]}
                >
                  <Input className="input" onChange={e=>setPassword(e.target.value)} type="password" />
                </Form.Item>
                <div className="same-line">
                  <Form.Item>
                    <Checkbox>Remember me for 30 days</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Text>Forgot Password</Text>
                  </Form.Item>
                </div>

                  <Form.Item>
                  <Button onClick={check} className="btn " htmlType="submit">
                  Sign in
                </Button>
                  </Form.Item>
                  <Form.Item>
                <Button className="signin ">Sign In with Google</Button>
                  </Form.Item>
              </Form>
              {/* <Text className="text-input inp">Email</Text>
                <Input className="input" type="email" />
                <Text className="text-input inp">Password</Text>
                <Input className="input" type="password" /> */}
              {/* <div className="same-line">
                <div className="remember">
                  <Checkbox />
                  <Text>Remember for 30 days</Text>
                </div>
                <div className="forgot">
                  <Text>Forgot Password</Text>
                </div>
              </div> */}
              {/* <div className="button">
                <Button className="btn" type="submit">
                  Sign in
                </Button>
                <Button className="signin">Sign In with Google</Button>
            </div> */}
            </div> 
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
