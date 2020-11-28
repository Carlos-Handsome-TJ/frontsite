import React, { useEffect, useState } from "react";
import "./userList.css";
import axios from "axios";
import { Input, AutoComplete, Menu } from "antd";
import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Route, Link } from "react-router-dom";
import HeaderSearch from "../../components/common/search";
import Recommend from "../../components/recommend/index";
import News from "../../components/news/index";

export default function UserList() {
  /**
   * 点击导航菜单栏
   */
  const [selectedKey, setSelect] = useState("app");
  const handleSelect = (e) => {
    setSelect(e.key);
  }
  return (
    <>
      <div className="user-box">
        <div className="user-left">
          1{/* <SettingOutlined className={'user-settings'}/> */}
        </div>
        <div className="user-content">
          <div className="user-content-header">
            <div className="user-search">
            {/**头部搜索框 */}
              <HeaderSearch />
            </div>
            <div className="user-nav">
            {/**导航 菜单 导航组件需要更进一层封状，只需要传入导航内容就可以实现导航需求*/}
              <Menu
                onClick={handleSelect}
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
                selectedKeys={selectedKey}
                mode="horizontal"
              >
                <Menu.Item key="mail">
                  <Link to="/userList/recommend">为你推荐</Link>
                </Menu.Item>
                <Menu.Item key="app">热门</Menu.Item>
                <Menu.Item key="alipay1">趋势</Menu.Item>
                <Menu.Item key="alipay2">
                  <Link to="/userList/news">新闻</Link>
                </Menu.Item>
                <Menu.Item key="alipay3">体育</Menu.Item>
                <Menu.Item key="alipay4">娱乐</Menu.Item>
              </Menu>
            </div>
          </div>
          <div className="user-content-body">
            <Route
              path="/userList/recommend"
              exact={true}
              strict={true}
              component={Recommend}
            />
            <Route
              path="/userList/news"
              exact={true}
              strict={true}
              component={News}
            />
          </div>
        </div>
        <div className="user-right">3</div>
      </div>
    </>
  );
}
