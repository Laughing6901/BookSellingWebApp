import { MenuOutlined, SearchOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  Col,
  Dropdown,
  Input, Layout, Menu,
  Row
} from "antd"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import DarkMode from '../component/DarkMode'
import Message from '../Message'
import AccountList from './AccountList'
import { startConnecting } from './chatRoomSlice'
import "./style.css"

const { Sider, Content, Header } = Layout

export default function ChatRoom(props) {
  const { id } = props.match.params
  const url = props.location.pathname
  const trigger = useSelector(state => state.sider.trigger)

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
      <AccountList theme={theme} url={url} />
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
        // collapsible 
        // collapsed={window.innerWidth < 750 ? trigger : false}
        >
          <div style={{ marginLeft: 10, marginTop: 18, marginBottom: 18, width: 280 }} className="siderHeader">
          <Row>
              <Col span={4}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <MenuOutlined style={{ fontSize: 24 }} theme={theme} />
                </Dropdown>
              </Col>
              <Col>
                <Input suffix={<SearchOutlined />} style={{ width: '90%' }} />
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
