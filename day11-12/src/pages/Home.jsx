import React, { useState } from "react";
import { Typography, Select, Menu, Input, Button, Avatar, Divider } from "antd";
import {
  SearchOutlined,
  
} from "@ant-design/icons";
import Message from "../components/Message";
import NavBar from "../components/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const { Title, Text } = Typography;

const Home = () => {
  const [user] = useAuthState(auth)
console.log(user)

  function logout(){
    auth.signOut();
  }
  return (
    <div className="chat-app">
      <button onClick={logout}>signout</button>
      <div className="app">
        <div className="display">
          <NavBar/>
          <div className="main">
            <div className="left-panel">
              <Input
                className="search-inp-home"
                prefix={<SearchOutlined />}
                placeholder=" SEARCH"
              />
              <div className="members">
                <div className="member-list">
                  <div className="mem">
                    <Avatar
                      size={60}
                      src={require("../assets/avatars/avatar1.png")}
                      alt="no"
                    />
                    <div className="name">
                      <h4>John Doe</h4>
                      <p>Hi there, How are you?</p>
                    </div>
                  </div>
                  <Divider/>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="message-options">
                
              <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      // onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
                <button className="options-btn"> CLEAR CHAT </button>
                <button className="options-btn">MORE</button>
              </div>
              <div className="message">
                <Message />
                {/* {messages?.map((m)=>{
                  <Mess key={m.id} message={m}/>
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
