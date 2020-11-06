import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Modal, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";

export default function Login(props) {
  /**
   * 登录账号密码校验
   * @param {username, password} string
   */
  const loginCheck = ({ username, password }) => {
    console.log("Received values of form: ", username, password);
    axios.post("/login", {
        data: {
          username,
          password
        }
      })
      .then((data) => {
        console.log(data)
        if (data.data.status === 1) {
          Modal.error({
            content: data.data.msg,
          })
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="login-area">
        <div className="login-icon"></div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={loginCheck}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input your Username!",
              },
              {},
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input your Password!",
              },
              {},
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Space>
            Or <Link to='/register'>register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
