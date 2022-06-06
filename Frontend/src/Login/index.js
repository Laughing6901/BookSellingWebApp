import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from './loginSlice'
import messageSlice from '../utils/messageSlice'

export default function Login() {
    const message = useSelector((state) => state.message)
    const isLogin = useSelector((state) => state.authen)
    console.log({message})
    console.log({isLogin})
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(login(values.email, values.password))
    }
    const onFinishFailed = (errorInfo) => {
        console.log({ errorInfo })
    }
    return (
        <div className='loginBackground'>
            <div className='loginContainer'>
                <div>
                    <h1>LOGIN</h1>
                </div>
                <div className='loginForm'>
                    <div>
                        <Form
                            labelCol={
                                {
                                    span: 3
                                }
                            }
                            labelAlign={'left'}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name='email'
                                rule={[
                                    {
                                        required: true,
                                        message: "Please input your email"
                                    }
                                ]}
                            >
                                <Input placeholder='Email' prefix={<UserOutlined />} />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                rule={[
                                    {
                                        required: true,
                                        message: "Please input your password"
                                    }
                                ]}
                            >
                                <Input.Password placeholder='Password' prefix={<LockOutlined />}/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType='submit' className='loginBtn'>Login</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className='signupLink'>
                    <span>
                        New user? <a href='/sign-up' className='underline'>Sign up</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
