import React, { useState } from "react"
import "./userList.css"
import { Menu, BackTop  } from "antd"
import { Route, Link } from "react-router-dom"
import HeaderSearch from "../../components/common/search"
import Recommend from "../../components/recommend/index"
import News from "../../components/news/index"
import Editor from "../../components/edit/index"

export default function UserList(props) {
  /**
   * 点击导航菜单栏
   */
  const [selectedKey, setSelect] = useState(props.location.pathname);
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
          <div className="user-content-header">
            <div className="user-search">
              {/**头部搜索框 */}
              <HeaderSearch />
            </div>
            <div className="user-nav">
              {/**导航 菜单 导航组件需要更进一层封装，只需要传入导航内容就可以实现导航需求*/}
              <BackTop />
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
                <Menu.Item key="/userList/recommend">
                  <Link to="/userList/recommend">为你推荐</Link>
                </Menu.Item>
                <Menu.Item key="/userList/hot">
                  <Link to="/userList/hot">热门</Link>
                </Menu.Item>
                <Menu.Item key="/userList/trend">
                  <Link to="/userList/trend">趋势</Link>
                </Menu.Item>
                <Menu.Item key="/userList/news">
                  <Link to="/userList/news">新闻</Link>
                </Menu.Item>
                <Menu.Item key="/userList/sports">
                  <Link to="/userList/sports">体育</Link>
                </Menu.Item>
                <Menu.Item key="">娱乐</Menu.Item>
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
        <div className="user-right">
          <Editor />
        </div>
      </div>
    </>
  );
}
