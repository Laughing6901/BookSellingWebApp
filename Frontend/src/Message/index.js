import { SendOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BoxHeader from './BoxHeader'
import chatSlice, { sendMessage } from './chatSlice'
import MessageList from './MessageList'

import './style.css'
import { store } from '../store';

export default function Message(props) {
    let messageChatInfo = useSelector(state => state.chatMessage);
    const dispatch = useDispatch();
    const {id} = props.match.params;
    
    const renderBoxHeader = () => {
        return (
            <BoxHeader />
        )
    }

    const receiveMessage = (values) => {
        let messageSendFormat= {
            socketId: messageChatInfo.socketId,
            message: values.messageInput
        }
        console.log("messageFormat:", messageSendFormat);
        dispatch(sendMessage(messageSendFormat));
    }

    const renderMessageList = () => {
        return (
            <MessageList/>
        )
    }
    
    return (
        <div className='messageBox'>
            {renderBoxHeader()}
            {renderMessageList()}

            <div className='sendMessage'>
                <Form
                    onFinish={receiveMessage}
                >
                    <Row className="inputMessage">
                        <Col span={14}>
                            <Form.Item
                                name="messageInput"
                            >
                                <Input
                                    placeholder="Message"
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item>
                                <Button htmlType='submit' style={{background: 'none'}}>
                                    <SendOutlined />
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div>
        </div>
    )
}
