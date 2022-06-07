import React from 'react'
import {useDispatch} from 'react-redux'
import './style.css'
import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from './loginSlice'

export default function Login(props) {
    if(JSON.parse(localStorage.getItem("user"))){
        props.history.push("/room")
      }

    const dispatch = useDispatch()
    
    const onFinish = (values) => {
        dispatch(login(values))
        .unwrap()
        .then(() => {
            props.history.push("/room")
            window.location.reload()
        })
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
