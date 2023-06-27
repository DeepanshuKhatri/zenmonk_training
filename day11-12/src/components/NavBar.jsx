import React from 'react'
import { Typography } from 'antd'
import { BellOutlined, SearchOutlined, WechatOutlined } from '@ant-design/icons'

const {Title} = Typography;
const NavBar = () => {
  return (
    <div>
        <div className="nav-bar">
            <div className="avatar-bot">
              <WechatOutlined className="we-chat-logo" />
              <Title level={3}>Chat BOT</Title>
            </div>
            <div className="nav-items">
              <nav>
                <ul className="nav-ul">
                  <li className="nav-li">HOME</li>
                  <li className="nav-li">CHAT</li>
                  <li className="nav-li">CONTACTS</li>
                  <li className="nav-li">SETTINGS</li>
                  <li className="nav-li">FAQs</li>
                  <li className="nav-li">TERMS OF USE</li>
                  <li className="nav-li">
                    <SearchOutlined className="nav-icon" />
                  </li>
                  <li className="nav-li">
                    <BellOutlined className="nav-icon" />
                  </li>
                </ul>
              </nav>
              {/* <Menu   mode="horizontal" items={items} />; */}
            </div>
          </div>
    </div>
  )
}

export default NavBar