import { LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Login/loginSlice'

export default function Logout(props) {
    const dispatch = useDispatch()

    const logoutTrigger = () => {
        dispatch(logout())
        .unwrap()
        .then(() => {
            window.location.href = "/"
        })
    }
    return (
        <Menu.Item>
            <div onClick={logoutTrigger}>
                <span>Lougout</span>
                <LogoutOutlined style={{ marginLeft: 55, fontSize: 20 }} />
            </div>
        </Menu.Item>
    )
}
