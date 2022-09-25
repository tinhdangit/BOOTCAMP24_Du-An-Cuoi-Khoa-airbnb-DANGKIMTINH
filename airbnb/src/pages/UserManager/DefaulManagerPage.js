import { getListUser } from "apis/UserManager";
import React, { useEffect, useState } from "react";

import { Layout, Table } from "antd";
import { SearchText } from "components/SearchText/SearchText";
import {
  CloseSquareOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

export const DefaulManager = () => {
  const { Header, Content, Sider } = Layout;
  const [listUser, SetListUser] = useState();

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />

          <h3 style={{ color: "#ffffff" }}>Dashboard</h3>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Link to="quanlinguoidung">Quản lý người dùng</Link> <br />
            <Link to="quanlithongtinvitri">Quản lý thông tin vị trí</Link>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Outlet />
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
