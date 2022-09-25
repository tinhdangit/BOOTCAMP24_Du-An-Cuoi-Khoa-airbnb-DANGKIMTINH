import React from "react";
import { Outlet } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderComponent from "components/HeaderComponent/HeaderComponent";
import FooterComponent from "components/FooterComponent/FooterComponent";
const { Header, Content, Footer } = Layout;
function DefauLayout() {
  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            backgroundColor: "#000000",
            display: "flex",
            minWidth: "800px",
            minHeight: "140px",
          }}
        >
          <HeaderComponent />
        </Header>

        <Content></Content>
        <main>
          <Outlet />
        </main>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default DefauLayout;
