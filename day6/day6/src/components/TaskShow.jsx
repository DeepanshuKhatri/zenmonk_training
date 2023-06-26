import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import { useSelector } from 'react-redux';


const TaskShow = () => {
    const data = useSelector((state)=> state.tasks.data)
  return (
    <div>
        <Space size="middle">
    <Badge count={data[0].count} showZero>
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge count={data[1].count} showZero>
      <Avatar shape="square" size="large" />
    </Badge>

    <Badge count={data[2].count} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    
    
  </Space>
    </div>
  )
}

export default TaskShow