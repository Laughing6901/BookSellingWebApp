import { SendOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import BoxHeader from './BoxHeader'
import MessageList from './MessageList'

import './style.css'

export default function Message(props) {
    const dispatch = useDispatch();
    const {id} = props.match.params
    
    const renderBoxHeader = () => {
        return (
            <BoxHeader />
        )
    }

    const receiveMessage = (values) => {
        console.log(values)
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
