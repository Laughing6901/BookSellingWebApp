import { UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function AccountList(props) {
  const { theme, url } = props
  
  const checkMatch = (path) => {
    return url === path ? 'ant-menu-item-selected' : ' '
  }

  const arrayTest = () => {
    const arr = ['Ngoc', 'Tam', 'Dat', 'Sinh'];

    return arr.map((item, index) => {
      return (
        <Menu.Item 
        key={index} 
        className = {checkMatch(`/room/${index}`)}
        >
          <NavLink
            to={`/room/${index}`}
            activeStyle={{ fontWeight: 'bold', color: 'rgb(142, 11, 142)' }}
          >
            <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
            <span className='friendName'>{item}</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }

  return (
    <Menu mode='inline' theme={theme} style={{ borderRight: "none" }} className='boxMenu'>
      {arrayTest()}
    </Menu>
  )
}
