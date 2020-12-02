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
import { apiLogin } from "../../Api/api";
import { useDispatch } from "react-redux";
import { isLogin, setUsername } from "./store/index"

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
      dispatch(setUsername(res.info.username))
      history.push("/userList/recommend");
    }
  };
  return (
    <>
      <div className="login-bg">
        <video className="login-video" autoPlay={true} loop={true} muted={true}>
          <source src={"https://mdup.apdcdn.tc.qq.com/vcloud1022.tc.qq.com/1022_a8b72b503fde4ac3a2b919c8e60fdf76.f0.mp4?vkey=A51567B0C1FA40E2221CDFD212CF28355AA5B9FA1E6AA4557FEAB6C4D4D3334B32263EC93BD196F4370E3214CFC7D119072E873A97689DBED4FA8007F041A8A19986FD47662CE6368CF1ED0D8A54C636448C62F4EB1ED36A&sha=0"} type="video/mp4" />
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
