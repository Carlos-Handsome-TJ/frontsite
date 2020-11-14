import React, { useState } from "react";
import { Form, Input, Tooltip, Row, Col, Checkbox, Button, Modal } from "antd";
import {
  QuestionCircleOutlined,
  AlertOutlined,
  HeartOutlined,
  LockTwoTone,
  SmileTwoTone,
  SendOutlined,
  MailTwoTone,
  IdcardTwoTone,
} from "@ant-design/icons";
import "./register.css";
import axios from "axios";
import kda2 from "../../assets/video/kda_4.mp4";
import { useHistory, Link } from "react-router-dom";
import { debounce } from "../../utils";
import { apiRegister, apiCheckName } from "../../Api/api";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  /**
   * 完成表单且校验成功
   * @param {object} values
   */
  const onFinish = async (values) => {
    const { email, username, password, confirm, agreement } = values;
    const res = await apiRegister({
      email,
      username,
      password,
      confirm,
      agreement,
    });
    const code = res.code;
    const msg = res.msg;
    switch (code) {
      case 0:
        Modal.success({
          icon: <HeartOutlined />,
          content: msg,
        });
        history.push("/login");
        break;
      case 1:
        Modal.warning({
          icon: "",
          content: msg,
        });
        break;
      case 2:
        Modal.error({
          icon: <AlertOutlined />,
          content: msg,
        });
        break;
      default:
        return;
    }
  };
  //使用防抖函数，对用户名进行后台动态校验：
  const [status, setStatus] = useState({
    tip: "",
    validateStatus: "",
    hasFeedback: false,
  });
  const checkName = debounce( async e => {
    if (!e.target.value.length) {
      setStatus({
        tip: "用户名不能为空~",
        validateStatus: "error",
        hasFeedback: true,
      });
      return;
    }
    const res = await apiCheckName(e.target.value)
    const code = res.code
    switch (code) {
            case 0:
              setStatus({
                tip: "用户名可用哦~",
                validateStatus: "success",
                hasFeedback: true,
              });
              break;
            case 1:
              setStatus({
                tip: "来晚了一步，用户名已被使用了~",
                validateStatus: "error",
                hasFeedback: true,
              });
              break;
            default:
              return;
          }
  }, 500);
  return (
    <>
      <div className={"register-bg"}>
        <video autoPlay={true} loop={true} muted={true}>
          <source src={kda2} type="video/mp4" />
        </video>
      </div>
      <div className="register-area">
        <div className="register-icon"></div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{}}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            hasFeedback={status.hasFeedback}
            validateStatus={status.validateStatus}
            help={status.tip}
            onChange={(e) => checkName(e)}
            label={
              <span>
                取一个有趣的名字&nbsp;
                <Tooltip title="仅支持字符串、下划线、数字以及字母的组合哦~">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input prefix={<SmileTwoTone twoToneColor="#52c41a" />} />
          </Form.Item>

          <Form.Item
            name="email"
            label="电子邮箱"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<MailTwoTone twoToneColor="#eb2f96" />} />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockTwoTone />} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password prefix={<SendOutlined twoToneColor="#52c41a" />} />
          </Form.Item>

          <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the captcha you got!",
                    },
                  ]}
                >
                  <Input prefix={<IdcardTwoTone twoToneColor="#fd2131" />} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept agreement"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link to="/arguments">agreement</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegistrationForm;
