import { SendOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import BoxHeader from './BoxHeader'
import { getIdFromUrl } from './collapsedSlice'
import './style.css'

export default function Message(props) {
    const dispatch = useDispatch();
    const {id} = props.match.params

    useEffect(() => {
        dispatch(getIdFromUrl(id))
    }, [id])
    
    const renderBoxHeader = () => {
        return (
            <BoxHeader />
        )
    }

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
