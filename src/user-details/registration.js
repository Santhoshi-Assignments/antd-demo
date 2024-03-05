import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import './registration.css'; 

const Registration = ({ history }) => {
  const onFinish = (values) => {
  
    history.push('/login');
  };

  return (
    <div className="form-container">
      <Form
        name="registration-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <div className="form-header">
          <h1>Registration</h1>
        </div>
       
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword" 
          rules={[{ required: true, message: 'Please input your confirm password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Space>
            Already have an account? <Link to="/login">Login now!</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
