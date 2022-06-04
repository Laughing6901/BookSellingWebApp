import React from 'react'
import {Row, Col, Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons'

export default function MessageList() {
    const lstMessage = [
        {
            id: "01",
            message: "Hello"
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
        }
    ]

    const distinguish = () => {
        return lstMessage.map((item, index) => {
            if(item.id === "01"){
                return(
                    <div className='messageContainerAcc1 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc1 '>{item.message}</div>
                    </div>
                )
            }
            if(item.id === "02"){
                return(
                    <div className='messageContainerAcc2 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc2'>
                            <Row>
                                <Col>
                                    <Avatar size={40} icon={<UserOutlined style={{ fontSize: 20 }} />} className='messageAvatar'/>
                                </Col>
                                <Col>
                                    <div className='messageDetail'>{item.message}</div>
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
