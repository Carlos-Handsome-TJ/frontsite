import React, { useState } from "react"
import {AutoComplete, Input} from "antd"
import {
    SearchOutlined,
    SettingOutlined
  } from "@ant-design/icons";

const HeaderSearch = () => {
  /**
   * 异步获取后端数据，提示框中显示内容
   */
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(
      value
        ? [
            { value: "当然这个搜索框肯定是骗你玩的了" },
            { value: "现在暂时还没开发搜索功能" },
            { value: "先占个坑" },
          ]
        : []
    );
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  return (
    <>
      <AutoComplete
        className="user-search-input"
        style={{ fontSize: "12px" }}
        backfill={true}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input
          size="large"
          style={{ borderRadius: "30px", fontSize: "12px" }}
          placeholder="search your interests"
          prefix={<SearchOutlined className={"search-icon"} />}
        />
      </AutoComplete>
      <SettingOutlined className={"user-settings"} />
    </>
  );
};
export default HeaderSearch