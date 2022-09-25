import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { postRegisterAction } from "redux/actions/userAction";
import { postRegister } from "apis/UserManager";
const { Option } = Select;
const RegisterPage = () => {
  let dispatch = useDispatch();
  const postDataRegister = async (data) => {
    let result = await postRegister(data);
    return result;
  };
  const onFinish = (values) => {
    let dataNewUser = {
      ...values,
      birthday: moment(values.birthday).format("YYYY / MM / DD"),
    };
    console.log("Succe:", dataNewUser);
    dispatch(postRegisterAction(dataNewUser));
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
          label="Họ và Tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Hãy nhập họ và tên!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: "Hãy nhập số điện thoại",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Ngày sinh" name="birthday">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="true">Nam</Option>
            <Option value="false">Nữ</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            {
              required: true,
              message: "Hãy nhập địa chỉ!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
