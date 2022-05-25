import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Col,
  Dropdown,
  Input, Layout, Menu,
  Row
} from "antd"
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import DarkMode from '../component/DarkMode'
import Message from '../Message'
import AccountList from './AccountList'
import { startConnecting } from './chatRoomSlice'
import "./style.css"

const { Sider, Content } = Layout

export default function ChatRoom(props) {
  const { id } = props.match.params
  const url = props.location.pathname
  
  const [theme, setTheme] = useState(localStorage.getItem('themeOption'))
  const dispatch = useDispatch();

  const body = document.body
  const lightTheme = 'light';
  const darkTheme = 'dark';

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  }
  else {
    body.classList.add(lightTheme)
    localStorage.setItem('themeOption', 'light')
    setTheme(lightTheme);
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

  const renderListName = () => {
    return (
      <AccountList theme={theme} url={url}/>
    )
  }

  // useEffect(() => {
  //   dispatch(startConnecting());
  // }, [dispatch])

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
          {renderListName()}
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
