import React, { useEffect } from 'react'
import { Row, Col, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons'
import { store } from '../../store'
import { useSelector } from 'react-redux'

export default function MessageList() {
    let messageChat = useSelector(state => state.chatMessage);

    const distinguish = (msg) => {
        return msg.map((item, index) => {
            if (item.socketId === messageChat.socketId) {
                return (
                    <div key={index} className='messageContainerAcc1 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc1'>{item.message}</div>
                    </div>
                )
            }
            else {
                return (
                    <div key={index} className='messageContainerAcc2 animate__animated animate__slideInUp animate_fast'>
                        <div className='messageAcc2'>
                            <Row wrap={false} >
                                <Col>
                                    <Avatar size={40} icon={<UserOutlined style={{ fontSize: 20 }} />} className='messageAvatar' />
                                </Col>
                                <Col className='messageDetail'>
                                    {item.message}
                                </Col>
                            </Row>
                        </div>
                    </div>
                )
            }
        })
    }
    useEffect(() => {
        console.log(messageChat);
    })
    return (
        <div className='messageList'>
            <div>
                {distinguish(messageChat.messages)}
            </div>
        </div>

    )
}
