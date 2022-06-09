import { UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function AccountList(props) {
  const { theme, url, searchTerm, phoneNumber } = props

  const checkMatch = (path) => {
    return url === path ? 'ant-menu-item-selected' : ' '
  }

  const arr = [
    {
      id: 0,
      email: "test@gmail.com",
      phoneNumber: "01973640937",
      fullName: "testing"
    },
    {
      id: 1,
      email: "test2@gmail.com",
      phoneNumber: "0847389374",
      fullName: "testing2"
    },
    {
      id: 2,
      email: "test3@gmail.com",
      phoneNumber: "87983459834",
      fullName: "testing3"
    }
  ]

  const arrayTest = () => {
    return arr.filter((val) => {
      if(searchTerm == ""){
        return val
      }
      else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
      else if (val.phoneNumber.includes(phoneNumber)){
        return val
      }
    }).map((item, index) => {
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
            <span className='friendName'>{item.fullName}</span>
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
