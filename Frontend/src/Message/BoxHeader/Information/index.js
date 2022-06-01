import { FileGifOutlined, FileImageOutlined, InfoCircleFilled, LinkOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Drawer, Row } from 'antd';
import React, { useState } from 'react'

export default function Information() {
    const [visible, isVisible] = useState(false)
    
    const showDrawer = () => {
        isVisible(true);
    };

    const onClose = () => {
        isVisible(false);
    };

    return (
        <>
            <InfoCircleFilled
                style={{ fontSize: 25, marginTop: 20 }}
                onClick={showDrawer}
            />
            <Drawer placement="right" onClose={onClose} visible={visible}>
                <div className='informationAccount'>
                    <Avatar size={55} icon={<UserOutlined style={{ fontSize: 32 }} />} />
                    <h1>Sarah Phan</h1>
                </div>
                <div className='informationExternal'>

                    <div>
                        <Row>
                            <Col className='informationIcon'>
                                <FileImageOutlined />
                            </Col>
                            <Col className='informationSpan'>
                                <span>7 photos</span>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className='informationIcon'>
                                <LinkOutlined />
                            </Col>
                            <Col className='informationSpan'>
                                <span>4 shared Links</span>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className='informationIcon'>
                                <FileGifOutlined />
                            </Col>
                            <Col className='informationSpan'>
                                <span>3 GIFs</span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
