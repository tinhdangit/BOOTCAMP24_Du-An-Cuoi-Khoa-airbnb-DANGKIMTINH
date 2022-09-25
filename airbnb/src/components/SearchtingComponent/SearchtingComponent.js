import React from "react";
import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};
const SearchtingComponent = ({ thongTinViTri }) => {
  return (
    <div
      className="searchting"
      style={{
        display: "flex",
        alignItems: "center",

        justifyContent: "space-evenly",
        position: "absolute",
        top: "80px",
        width: "80%",
        height: "60px",
        borderRadius: "40px 40px 40px 40px",
        backgroundColor: "white",
      }}
    >
      <div className="searchting-choose">
        <Select
          bordered="none"
          showSearch
          placeholder="Bạn sắp đi đâu?  "
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {thongTinViTri.map((viTri, index) => (
            <Option key={index} value={viTri.valueate}>
              {viTri.name},{viTri.province},{viTri.country}
            </Option>
          ))}
        </Select>
      </div>

      <div>
        <p style={{ marginBottom: "-2px" }}>Nhận Phòng</p>
        <input style={{ border: "none" }} type="text" placeholder="Thêm ngày" />
      </div>
      <wr />
      <div>
        <p style={{ marginBottom: "-2px" }}>Trả Phòng</p>
        <input style={{ border: "none" }} type="text" placeholder="Thêm ngày" />
      </div>
      <div>
        <p style={{ marginBottom: "-2px" }}>Thêm khách</p>
        <input
          style={{ border: "none" }}
          type="text"
          placeholder="Thêm khách"
        />
      </div>
      <div className="searchting-click">
        <Link to="listroom">
          <SearchOutlined style={{ fontSize: "150%", color: "black" }} />
        </Link>
      </div>
    </div>
  );
};

export default SearchtingComponent;
