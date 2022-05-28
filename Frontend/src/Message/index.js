import { SendOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BoxHeader from './BoxHeader'
import { changeTrigger } from './siderSlice'
import './style.css'

export default function Message() {
    const dispatch = useDispatch();

    const renderBoxHeader = () => {
        return (
            <BoxHeader />
        )
    }

    const [trigger, isTrigger] = useState(true)
    useEffect(() => {
        dispatch(changeTrigger(trigger))
    }, [trigger, dispatch])

    const receiveMessage = (values) => {
        console.log(values)
    }

    return (
        <div className='messageBox'>
            {renderBoxHeader()}
            <div className='messageList'></div>
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
                                    onClick={() => {
                                        isTrigger(!trigger)
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item>
                                <Button htmlType='submit'>
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
