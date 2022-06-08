import { PhoneFilled, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Avatar, Col, Row } from 'antd'
import React from 'react'
import Information from './Information';

export default function BoxHeader() {

    const renderInformation = () => {
        return (
            <Information />
        )
    }

    const popup = () => {
        window.open("/example", "Window", "popup")
    }

    return (
        <div className='boxHeader'>
            <Row>
                <Col sm={14} md={16} xl={20}>
                    <Row className='accountDetail' >
                        <Col>
                            <Avatar size={50} icon={<UserOutlined style={{ fontSize: 30 }} />} className="headerAvatar" />
                        </Col>
                        <Col xl={8}>
                            <h3 style={{ marginBottom: 0, fontSize: 20 }} id="text">Sarah Phan</h3>
                            <p>Last seen 1/5/2022</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={10} md={8} xl={4}>
                    <Row>
                        <Col>
                            <PhoneFilled
                                style={{ marginRight: 40, fontSize: 25, marginTop: 20 }}
                                // onClick={accessMicro}
                            />
                        </Col>
                        <Col>
                            <VideoCameraFilled
                                style={{ fontSize: 25, marginTop: 20, marginRight: 40 }}
                                // onClick={accessCamera}
                                onClick={popup}
                            />
                        </Col>
                        <Col>
                            {renderInformation()}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
