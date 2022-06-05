import React from 'react'
import './style.css'
import { Button, Col, Form, Input, Row } from 'antd'

export default function Signup() {
  const onFinish = (values) => {
    console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log({ errorInfo })
  }
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className='signupLogo'></div>
        </Col>
        <Col span={16} className='signupCol'>
          <div>
            <h1>SIGN-UP</h1>
          </div>
          <div className='signupForm'>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{
                span: 5
              }}
              labelAlign='left'
            >
              <Form.Item
                label='Email'
                name='email'
                hasFeedback
                rules={
                  [
                    {
                      required: true,
                      message: 'Please provide email'
                    },
                    {
                      type: 'email',
                      message: 'Wrong email format'
                    }
                  ]
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                hasFeedback
                rules={
                  [
                    {
                      required: true,
                      message: 'Please provide password'
                    },
                    {
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: 'Password must at least 8 characters, contain special character, 1 uppercase letter, 1 lowercase letter, and 1 number'
                    }
                  ]
                }
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={
                  [
                    {
                      required: true,
                      message: 'Please confirm password again'
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]
                }
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button htmlType='submit' className='signupBtn'>Sign Up</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
