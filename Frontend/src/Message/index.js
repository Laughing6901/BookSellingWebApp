import { PhoneFilled, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Avatar, Col, Row } from 'antd'
import React from 'react'
import './style.css'

export default function Message() {
    function accessMicro() {
        navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        }).catch( err => {
            console.log("u got an error:" + err)
        });
    }
    function accessCamera() {
        navigator.mediaDevices.getUserMedia({video: true, audio: true}).then( stream => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        }).catch( err => {
            console.log("u got an error:" + err)
        });
    }
    return (
        <div className='messageBox'>
            <div className='boxHeader'>
                <Row>
                    <Col span={20}>
                        <Row>
                            <Col>
                                <Avatar size={50} icon={<UserOutlined style={{ fontSize: 30 }} />} />
                            </Col>
                            <Col span={8}>
                                <h3 style={{ marginBottom: 0, fontSize: 20 }}>Sarah Phan</h3>
                                <p>Last seen 1/5/2022</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Row>
                            <Col>
                                <PhoneFilled 
                                style={{marginRight: 40, fontSize: 25, marginTop: 20}} 
                                onClick = {accessMicro}
                                />
                            </Col>
                            <Col>
                                <VideoCameraFilled 
                                style={{ fontSize: 25, marginTop: 20}}
                                onClick = {accessCamera}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
