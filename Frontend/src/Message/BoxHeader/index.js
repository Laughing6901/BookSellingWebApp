import { PhoneFilled, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Avatar, Col, Row } from 'antd'
import React from 'react'
import Information from './Information';

export default function BoxHeader(props) {
    const { idAccount } = props

    const arr = [
        {
            id: 0,
            email: "test@gmail.com",
            phoneNumber: "01973640937",
            fullName: "testing"
        },
        {
            id: 1,
            email: "test2@gmail.com",
            phoneNumber: "0847389374",
            fullName: "testing2"
        },
        {
            id: 2,
            email: "test3@gmail.com",
            phoneNumber: "87983459834",
            fullName: "testing3"
        }
    ]

    const arrRoom = [
        {
            roomId: 1,
            accountId: 1,
        },
        {
            roomId: 1,
            accountId: 2,
        }
    ]

    const boxHeaderDetail = () => {
        return arr.map((item) => {
            console.log(typeof(item.id))
            if (item.id === parseInt(idAccount)) {
                return(
                    <h3 style={{ marginBottom: 0, fontSize: 20, marginTop: 14 }} id="text">{item.fullName}</h3>
                )
            }
        })
    }

    // const addFriendButton = () => {
    //     const element = 
    //     if (roomId === 1){

    //     }
    // }

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
                            {boxHeaderDetail()}
                        </Col>
                    </Row>
                </Col>
                <Col sm={10} md={8} xl={4}>
                    <Row>
                        <Col>
                            <PhoneFilled
                                style={{ marginRight: 40, fontSize: 25, marginTop: 20 }}
                            />
                        </Col>
                        <Col>
                            <VideoCameraFilled
                                style={{ fontSize: 25, marginTop: 20, marginRight: 40 }}
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
