import React from "react";
import {
    EllipsisOutlined,
} from "@ant-design/icons";

/**
 *
 * @param {obj} props
 */
const TimeInfo = (props) => {
    const { username, createTime } = props;
    return (
        <>
            <div className="item-user">
                <span style={{ fontWeight: "bold" }}>{`${username}`}</span>
                <span>{`${createTime}小时前`}</span>
            </div>
            <EllipsisOutlined className="item-setting item-icon" />
        </>
    );
};

export default TimeInfo