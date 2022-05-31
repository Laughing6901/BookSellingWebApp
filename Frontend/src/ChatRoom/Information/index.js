import React from 'react'
import { useSelector } from 'react-redux'
import {
    Avatar,
    Col,
    Layout,
    Row
} from 'antd'
import {
    FileGifOutlined,
    FileImageOutlined,
    LinkOutlined,
    UserOutlined
} from '@ant-design/icons'

export default function Information(props) {
    const { theme } = props
    const collapsed = useSelector(state => state.collapsed.collapsedStatus)
    const idFromUrl = useSelector(state => state.collapsed.idFromUrl)

    return (
        <Layout.Sider theme={theme} collapsible collapsed={collapsed} className="informationSider">
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
        </Layout.Sider>
    )
}
