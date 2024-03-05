
import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import './login.css'; 

const Login = ({ history }) => {
  const onFinish = (values) => {
    
    history.push('/dashboard');
  };

  return (
    <div className="form-container">
      <Form
        name="login-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <div className="form-header">
          <h1>Login</h1>
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Space>
            Or <Link to="/registration">register now!</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
