import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
} from "antd"
import { MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import "./style.css"
import DarkMode from '../component/DarkMode'
import { Route } from 'react-router-dom'
import Message from '../Message'
import { NavLink } from 'react-router-dom'

const { Sider, Content } = Layout

export default function ChatRoom(props) {
  const {id} = props.match.params
  console.log(props.match)
  console.log(id)
  const [theme, setTheme] = useState(localStorage.getItem('themeOption'))
  const [itemActive, setItemActive] = useState();

  const body = document.body
  const lightTheme = 'light';
  const darkTheme = 'dark';

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  }
  else {
    body.classList.add(lightTheme)
    localStorage.setItem('themeOption', 'light')
  }

  const onChangeTheme = (formState) => {
    setTheme(formState)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <span>Night Mode</span>
        <DarkMode onChangeTheme={onChangeTheme} />
      </Menu.Item>
    </Menu>
  )

  const arrayTest = () => {
    const arrActive = [];
    const arr = ['Ngoc', 'Tam', 'Dat', 'Sinh'];

    return arr.map((item, index) => {
      arrActive[index] = 'ant-menu-item-selected'

      return (
        <Menu.Item key={index} className={`${index === itemActive ? 'ant-menu-item-selected' : ''}` }>
          <NavLink
            onClick={() => {
              setItemActive(index)
              // console.log(index)
            }}
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
    <div className='chatRoomContent'>
      <Layout hasSider>
        <Sider
          style={{
            height: '100vh',
            position: 'fixed',
            borderRight: '1px solid #f0f0f0'
          }}
          theme={theme}
        >
          <div style={{ marginLeft: 10, marginTop: 18, marginBottom: 18, width: 280 }} className="siderHeader">
            <Row>
              <Col span={5}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <MenuOutlined style={{ fontSize: 28 }} theme={theme} />
                </Dropdown>
              </Col>
              <Col>
                <Input suffix={<SearchOutlined />} />
              </Col>
            </Row>
          </div>
          <Menu mode='inline' theme={theme} style={{ borderRight: "none" }} className='boxMenu'>
            {/* <Menu.Item key="1">
                <NavLink
                  to={`/room/1`}
                  activeStyle={{ fontWeight: 'bold', color: 'rgb(142, 11, 142)' }}
                >
                  <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
                  <span className='friendName'>Sarah Phan</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink
                to={`/room/2`}
                activeStyle={{ fontWeight: 'bold', color: 'rgb(142, 11, 142)' }}
              >
                <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
                <span className='friendName'>Nguyễn Tâm</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink
                to={`/room/3`}
                activeStyle={{ fontWeight: 'bold', color: 'rgb(142, 11, 142)' }}
              >
                <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
                <span className='friendName'>Đạt Nguyễn</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink
                to={`/room/4`}
                activeStyle={{ fontWeight: 'bold', color: 'rgb(142, 11, 142)' }}
              >
                <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
                <span className='friendName'>Nguyễn Văn Sinh</span>
              </NavLink>
            </Menu.Item> */}
            {arrayTest()}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: '19.6%' }}>
          <Content>
            <Route
              exact={false}
              path='/room/:id'
              component={Message}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
