import React from 'react'
import './style.css'
import {Button, Form, Input} from "antd"

export default function Login() {
    const onFinish = (values) => {
        console.log({values})
    }
    const onFinishFailed = (errorInfo) => {
        console.log({errorInfo})
    }
  return (
    <div className='loginBackground'>
        <div className='loginContainer'>
            <div>
                <h1>Login</h1>
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
                        <Input placeholder='Email'/>
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
                        <Input.Password placeholder='Password'/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>Login</Button>
                    </Form.Item>
                </Form>
            </div>
            </div>
        </div>
    </div>
  )
}
