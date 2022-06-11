import React from 'react'
import './style.css'
import { Button, Col, Form, Input, Row } from 'antd'
import {useDispatch} from 'react-redux'
import {register} from './signupSlice'

export default function Signup(props) {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(register(values))
    .unwrap()
    .then(() => {
      alert("Register successfully")
      props.history.push('/')
      window.location.reload()
    })
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
                label='First Name'
                name='FirstName'
                rules={[
                  {
                    required: true,
                    message: 'Please input first name'
                  }   
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label='Last Name'
                name='LastName'
                rules={[
                  {
                    required: true,
                    message: 'Please input last name'
                  }   
                ]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label='Email'
                name='Email'
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
                name='Password'
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
                dependencies={['Password']}
                hasFeedback
                rules={
                  [
                    {
                      required: true,
                      message: 'Please confirm password again'
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('Password') === value) {
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
