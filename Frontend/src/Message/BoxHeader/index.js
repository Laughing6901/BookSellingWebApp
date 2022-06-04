import { PhoneFilled, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Avatar, Col, Row } from 'antd'
import React from 'react'
import Information from './Information';

export default function BoxHeader() {
    function accessMicro() {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        }).catch(err => {
            console.log("u got an error:" + err)
        });
    }
    function accessCamera() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        }).catch(err => {
            console.log("u got an error:" + err)
        });
    }

    const renderInformation = () => {
        return (
            <Information/>
        )
    }

    return (
        <div className='boxHeader'>
            <Row>
                <Col sm={18} xl={20}>
                    <Row className='accountDetail' >
                        <Col>
                            <Avatar size={50} icon={<UserOutlined style={{ fontSize: 30 }} />} className="headerAvatar"/>
                        </Col>
                        <Col xl={8}>
                            <h3 style={{ marginBottom: 0, fontSize: 20 }} id="text">Sarah Phan</h3>
                            <p>Last seen 1/5/2022</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} xl={4}>
                    <Row>
                        <Col>
                            <PhoneFilled
                                style={{ marginRight: 40, fontSize: 25, marginTop: 20 }}
                                onClick={accessMicro}
                            />
                        </Col>
                        <Col>
                            <VideoCameraFilled
                                style={{ fontSize: 25, marginTop: 20, marginRight: 40 }}
                                onClick={accessCamera}
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
