import React from "react";
import { Popover, Avatar, Image } from "antd";
import {
    UserOutlined,
} from "@ant-design/icons";
/**
 *
 * @param {obj} props
 */
const UserInfo = (props) => {
    const { src, username, attention, followers } = props;
    console.log("头部组件的数据", props);
    return (
        <>
            <Popover
                content={
                    <div style={{ width: "200px", height: "80px" }}>
                        <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                            src={<Image src={src} />}
                        />
                        <p>{`@${username}`}</p>
                        <span
                            style={{ paddingRight: "10px" }}
                        >{`${attention}正在关注`}</span>
                        <span>{`${followers}关注者`}</span>
                    </div>
                }
            >
                <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    src={<Image src={src} />}
                />
            </Popover>
        </>
    );
};
export default UserInfo