import React from 'react'
import {Row, Col, Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons'

export default function MessageList() {
    const lstMessage = [
        {
            id: "01",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "02",
            message: "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "01",
            message: "Hello world"
        },
        {
            id: "02",
            message: "Sarah"
        },
        {
            id: "01",
            message: "Dat"
        },
        {
            id: "02",
            message: "Hello back test"
        },
        {
            id: "01",
            message: "Hello world"
        },
        {
            id: "02",
            message: "Lorem ipsum"
        },
        {
            id: "01",
            message: "Dat"
        },
        {
            id: "02",
            message: "Hello back"
        },
        {
            id: "01",
            message: "Hello world"
        },
        {
            id: "02",
            message: "Sarah"
        },
        {
            id: "01",
            message: "Dat"
        },
        {
            id: "02",
            message: "Hello"
        },
        {
            id: "01",
            message: "Hello world"
        },
        {
            id: "02",
            message: "Sarah"
        },
        {
            id: "01",
            message: "Dat"
        }
    ]

    const distinguish = () => {
        return lstMessage.map((item, index) => {
            if(item.id === "01"){
                return(
                    <div className='messageContainerAcc1 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc1'>{item.message}</div>
                    </div>
                )
            }
            if(item.id === "02"){
                return(
                    <div className='messageContainerAcc2 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc2'>
                            <Row wrap= {false}>
                                <Col>
                                    <Avatar size={40} icon={<UserOutlined style={{ fontSize: 20 }} />} className='messageAvatar'/>
                                </Col>
                                <Col className='messageDetail'>
                                    <div className=''>{item.message}</div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )
            }
        })
    }
  return (
    <div className='messageList'>
        {distinguish()}
    </div>

  )
}
