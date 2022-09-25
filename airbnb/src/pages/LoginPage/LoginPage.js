import { postLogin } from "apis/UserManager";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postUserLoginAction } from "redux/actions/userAction";
import { Button, Checkbox, Form, Input, message } from "antd";

function LoginPage() {
  let history = useNavigate();
  let dispatch = useDispatch();

  const onLoginSucces = () => {
    message.success("Đăng nhập thành công");
    setTimeout(() => {
      history("/");
    }, 1000);
  };
  const onLoginFail = () => {
    message.error("Đăng nhập thất bại");
  };
  const onFinish = async (values) => {
    dispatch(postUserLoginAction(values, onLoginSucces, onLoginFail));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ width: "1000px", padding: "150px", textAlign: "center" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>
        <div style={{ paddingLeft: "240px", paddingBottom: "32px" }}>
          <Link to="/register">Đăng ký</Link>
        </div>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
