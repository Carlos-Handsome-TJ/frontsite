import React, { useEffect, useState } from "react";
import "./userList.css";
import axios from "axios";
import { Input, AutoComplete, Menu } from "antd";
import {
  SearchOutlined,
  SettingOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Route, Link } from "react-router-dom";

const { SubMenu } = Menu;
export default function UserList() {
  useEffect(() => {
    // async function getData() {
    //   const res = await apiGetData();
    //   console.log(222, res);
    // }
    // getData();
    axios
      .get("/list/userList")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);

  /**
   * 异步获取后端数据，提示框中显示内容
   */
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(
      value ? [{ value: "aaa" }, { value: "bbb" }, { value: "ccc" }] : []
    );
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  /**
   * 点击导航菜单栏
   */
  const [selectedKey, setSelect] = useState("app");
  const handleSelect = (e) => {
    setSelect(e.key);
  };

  return (
    <>
      <div className="user-box">
        <div className="user-left">
          1{/* <SettingOutlined className={'user-settings'}/> */}
        </div>
        <div className="user-content">
          <div className="user-search">
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
          </div>
          <div className="user-nav">
            <Menu
              onClick={handleSelect}
              style={{ fontSize: "18px" }}
              selectedKeys={selectedKey}
              mode="horizontal"
            >
              <Menu.Item key="mail" icon={<MailOutlined />}>
              <Link to='/userList/recommend'>
              为你推荐
              </Link>
                {/* 为你推荐 */}
              </Menu.Item>
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                美国大选
              </Menu.Item>
              <Menu.Item key="alipay1">趋势</Menu.Item>
              <Menu.Item key="alipay2">新闻</Menu.Item>
              <Menu.Item key="alipay3">体育</Menu.Item>
              <Menu.Item key="alipay4">娱乐</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="user-right">3</div>
      </div>
    </>
  );
}
