import { PhoneFilled, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Avatar, Col, Row } from 'antd'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

export default function BoxHeader() {
    const trigger = useSelector(state => state.sider.trigger)

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

    useEffect(() => {
        const ele = document.getElementById("accountDetailId")
        if(trigger){
            ele.classList.add("triggerStyle")
            ele.classList.remove("untrigger")
        }
        if(!trigger){
            ele.classList.add("untrigger")
            ele.classList.remove("triggerStyle")
        }
    }, [trigger])

    return (
        <div className='boxHeader'>
            <Row>
                <Col span={20}>
                    <Row className='accountDetail' id="accountDetailId" >
                        <Col>
                            <Avatar size={50} icon={<UserOutlined style={{ fontSize: 30 }} />} />
                        </Col>
                        <Col xl={8}>
                            <h3 style={{ marginBottom: 0, fontSize: 20 }} id="text">Sarah Phan</h3>
                            <p>Last seen 1/5/2022</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row>
                        <Col>
                            <PhoneFilled
                                style={{ marginRight: 40, fontSize: 25, marginTop: 20 }}
                                onClick={accessMicro}
                            />
                        </Col>
                        <Col>
                            <VideoCameraFilled
                                style={{ fontSize: 25, marginTop: 20 }}
                                onClick={accessCamera}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
