import React, { useEffect, useState } from "react";
import "../assets/styles/login.css";
import { Typography, Input, Checkbox, Button, Form, Radio } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;


function SignUp() {
  const navigate = useNavigate();
  
  const [details, setDetails] = useState([]);
  const [role, setRole] = useState("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
    const ls = JSON.parse(localStorage.getItem("details"));
    console.log(ls);
  }, [details]);

  function submit() {
    setDetails((prevDetails)=>
      [...prevDetails,
        {
          name, email, password, role
        }]
      
    )

    // console.log(details);
  }
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="login">
            <div className="details">
              <Title level={1}>Signup on Cradle</Title>
              <Text className="text-input">
                Welcome to the family of Cradle!
              </Text>
              <Form layout="vertical" autoComplete="off">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Name",
                    },
                  ]}
                >
                  <Input onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Enter a valid email address!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Password",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    type="password"
                  />
                </Form.Item>

                <Form.Item
                  label="Role"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Radio.Group onChange={e=> setRole(e.target.value)} value={role} rules={[{required:true}]}>
                    <Radio value={"admin"}>Admin</Radio>
                    <Radio value={"vendor"}>vendor</Radio>
                    <Radio value={"customer"}>customer</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Button className="btn" onClick={submit} htmlType="submit">
                    Sign Up
                  </Button>
                </Form.Item>
                {/* <Form.Item>
                <Button className="signin ">Sign In with Google</Button>
                  </Form.Item> */}
              </Form>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
