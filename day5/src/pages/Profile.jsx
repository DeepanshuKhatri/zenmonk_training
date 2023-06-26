import React from "react";
import { useState } from "react";
import { Typography, Input, Button, Form, Avatar } from "antd";
import "../assets/styles/login.css";
import {UserOutlined} from '@ant-design/icons';
function Profile() {
  // const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  // console.log(loggedIn);
  return (
    <div className="cont">
      {/* <div className="profile-img"></div> */}
      <div className="profile">
        <div className="photo">
          <div className="avatar">
          <Avatar size={250} icon={<UserOutlined />} />
          </div>
        </div>
        <div className="desc">
          <Form layout="vertical">
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please fill this.",
                },
              ]}
            >
              <Input  className="pr-inp" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please fill this.",
                },
              ]}
            >
              <Input className="pr-inp" />
            </Form.Item>

            <Form.Item
              label="Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please fill this.",
                },
              ]}
            >
              <Input className="pr-inp" />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: "Please fill this.",
                },
              ]}
            >
              <Input className="pr-inp" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
