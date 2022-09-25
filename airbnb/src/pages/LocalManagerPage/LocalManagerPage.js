import {
  deleteLocation,
  deleteUser,
  editUser,
  getListUser,
  getLocation,
} from "apis/UserManager";
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

const LocalManagerPage = () => {
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [userID, setUserID] = useState("");
  const handleClose = () => {
    return setShow(false);
  };
  const handleDeleteUser = async (record) => {
    const { _id } = record;
    await deleteLocation(_id);
  };
  const handleShow = (record) => {
    const { name, province, valueate, _id } = record;
    setUserID(_id);
    form.setFieldsValue({
      name,
      province,
      valueate,
    });
    console.log("record", record);
    setShow(true);
  };
  const { Header, Content, Sider } = Layout;
  const [listUser, SetListUser] = useState();
  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "key",
    },
    {
      title: "Tên Phòng",
      dataIndex: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",

      render: (_, { image }) => (
        <>
          <img style={{ width: "50px", height: "70px" }} src={image} />
        </>
      ),
    },
    {
      title: "Location",
      dataIndex: "province",
    },

    {
      title: "Guess Max",
      dataIndex: "valueate",
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
        let result = await getLocation();
        const addKey = result.map((item, index) => ({
          ...item,
          key: index + 1,
        }));
        console.log("tìm thử api", addKey);

        SetListUser(addKey);
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
          <Modal.Title>Chỉnh sửa phòng</Modal.Title>
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
            <Form.Item label="Tên phòng" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Province" name="province">
              <Input />
            </Form.Item>
            <Form.Item label="Guess Max" name="valueate">
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
            <p>say hello word 4</p>
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

export default LocalManagerPage;
