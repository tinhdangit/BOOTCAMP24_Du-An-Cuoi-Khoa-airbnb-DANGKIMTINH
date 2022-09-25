import { deleteUser, editUser, getListUser } from "apis/UserManager";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Checkbox, Form, DatePicker, Select, Input } from "antd";
import { SearchText } from "components/SearchText/SearchText";
import { Layout, Table } from "antd";
import {
  CloseSquareOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
const UserManagerPage = () => {
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [userID, setUserID] = useState("");
  const handleClose = () => {
    return setShow(false);
  };
  const handleDeleteUser = async (record) => {
    const { _id } = record;
    await deleteUser(_id);
  };
  const handleShow = (record) => {
    const {
      name,
      email,
      password,
      phone,
      birthday,
      gender,
      type,
      address,
      _id,
    } = record;
    setUserID(_id);
    form.setFieldsValue({
      name,
      email,
      password,
      phone,
      birthday,
      gender,
      type,
      address,
    });
    // set  value for form
    // show modal
    console.log("record", record);
    setShow(true);
  };
  const { Header, Content, Sider } = Layout;
  const [listUser, SetListUser] = useState();
  const columns = [
    {
      title: "Mã người dùng",
      dataIndex: "_id",
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",

      render: (_, { avatar }) => (
        <>
          <img style={{ width: "50px", height: "70px" }} src={avatar} />
        </>
      ),
    },
    {
      title: "Kiểu người dùng",
      dataIndex: "type",
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record, index) => (
        <div>
          <EyeOutlined style={{ cursor: "pointer" }} />{" "}
          <EditOutlined
            onClick={() => handleShow(record)}
            style={{ cursor: "pointer" }}
          />{" "}
          <CloseSquareOutlined
            onClick={() => handleDeleteUser(record)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
  ];
  useEffect(() => {
    const listUser = async () => {
      try {
        let result = await getListUser();
        console.log("tìm thử api", result);
        SetListUser(result);
      } catch (error) {
        return error;
      }
    };
    listUser();
  }, []);

  const onFinish = async (formValue) => {
    const tamp = { ...formValue };
    const { password, ...rest } = tamp;
    console.log("rest:", rest);

    const updateUser = editUser(userID, rest);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm quản trị viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            form={form}
          >
            <Form.Item label="Họ và tên" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Ngày sinh" name="birthday">
              <input type="date" />
            </Form.Item>

            <Form.Item name="gender" label="Giới tính">
              <select placeholder="Giới tính">
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </Form.Item>
            <Form.Item name="type" label="Kiểu thành viên">
              <select placeholder="Kiểu thành viên">
                <option value="ADMIN">ADMIN</option>
                <option value="CLIENT">CLIENT</option>
              </select>
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
      <SearchText />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <span
              style={{
                marginLeft: 8,
              }}
            ></span>
          </div>
          <Table columns={columns} dataSource={listUser} />
        </div>
      </Content>
    </>
  );
};

export default UserManagerPage;
