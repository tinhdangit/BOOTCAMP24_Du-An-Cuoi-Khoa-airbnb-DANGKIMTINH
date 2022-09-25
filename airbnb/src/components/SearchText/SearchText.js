import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Checkbox, Form, DatePicker, Select, Input } from "antd";
import { addUser } from "apis/UserManager";

const { Option } = Select;
export const SearchText = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");

  const onFinish = async (formValue) => {
    console.log("Success:", formValue);
    const addNewUser = await addUser(formValue);
    console.log("addUser", addNewUser);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Thêm quản trị viên
        </Button>

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
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
      <input
        style={{ width: "80%" }}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button style={{ width: "20%" }}>Tìm kiếm</button>
    </>
  );
};
