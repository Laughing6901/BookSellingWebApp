import { LogoutOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
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
import Logout from './Logout'
import "./style.css"

const { Sider, Content } = Layout

export default function ChatRoom(props) {
  if(!(JSON.parse(localStorage.getItem("user")))){
    props.history.push("/")
    alert("Please login first")
  }
  const url = props.location.pathname

  const [theme, setTheme] = useState(localStorage.getItem('themeOption'))
  const [searchTerm, setSearchTerm] = useState('')
    
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
      <Logout/>
    </Menu>
  )

  const renderListName = () => {
    return (
      <AccountList 
      theme={theme} 
      url={url} 
      searchTerm = {searchTerm}
      />
    )
  }

  useEffect(() => {
    dispatch(startConnecting());
  }, [dispatch])

  return (
   <div className='chatRoomContent'>
     <Layout>
     <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
          theme={theme}
          breakpoint="md"
          collapsedWidth={0}
        >
          <div style={{ marginLeft: 10, marginTop: 18, marginBottom: 18, width: 280 }} className="siderHeader">
          <Row>
              <Col span={4}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <MenuOutlined style={{ fontSize: 24 }} theme={theme} />
                </Dropdown>
              </Col>
              <Col>
                <Input 
                suffix={<SearchOutlined />} 
                style={{ width: '90%' }} 
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                }}
                />
              </Col>
            </Row>
        </div>
        {renderListName()}
          
        </Sider>
        <Layout className='site-layout'>
        <Content>
            <div>
            <Route
              exact={false}
              path='/room/:id'
              component={Message}
            />
            </div>
          </Content>  
        </Layout>
    </Layout>
   </div>
  )
}
