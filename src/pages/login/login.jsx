import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Modal, Space } from "antd";
import {
  UserOutlined,
  LockOutlined,
  WechatOutlined,
  QqOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./login.css";
import kda1 from "../../assets/video/kda_2.mp4";
import { apiLogin } from "../../Api/api";
import { useDispatch } from "react-redux";
import { isLogin } from "./store/index"



export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch()
  /**
   * 登录账号密码校验
   * @param {username, password} string
   */
  const loginCheck = async ({ username, password }) => {
    const res = await apiLogin({ username, password });
    console.log(res)
  
    if (res.code === -1) {
      Modal.error({
        content: res.msg,
      });
    } else {
      //获取后端返回的token，并存贮到本地:
      dispatch(isLogin(true))
      history.push("/userList");
    }
  };
  return (
    <>
      <div className="login-bg">
        <video className="login-video" autoPlay={true} loop={true} muted={true}>
          <source src={kda1} type="video/mp4" />
        </video>
      </div>
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
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
        <div className="login-other">
          <WechatOutlined />
          <QqOutlined />
          <GithubOutlined />
        </div>
      </div>
      <div className="login-footer">
        <ul>
          <li>© 2020 晨风扶绿的芭蕉</li>
        </ul>
      </div>
    </>
  );
}
