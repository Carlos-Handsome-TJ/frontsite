import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { apiGetPerson } from "../../Api/api";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";

const sendTip = () => {
  const timeNow = dayjs().hour();
  const tipArr = [
    {
      tip: "凌晨了~早点休息~", //0~3点
    },
    {
      tip: "凌晨了~早点休息~", //3~6点
    },
    {
      tip: "早上好~又是全新的一天~", //6~9点
    },
    {
      tip: "上午好~今天有什么计划？", //9~12点
    },
    {
      tip: "下午好~忙碌的一天~", //12~15点
    },
    {
      tip: "下午好~抽点时间摸摸鱼~", //15~18点
    },
    {
      tip: "晚上好~结束工作之后要适当放松一下~", //18~21点
    },
    {
      tip: "深夜了~早睡早起身体好~", //21~24点
    },
  ];
  return tipArr[Math.floor(timeNow / 3)];
};

export default function Editor() {
  const [personInfo, setInfo] = useState({});
  const getData = async () => {
    const res = await apiGetPerson();
    console.log(res);
    if (res) {
      setInfo({
        username: res.msg[0].username,
        avatar:
          "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/8363340df5807340a30ec7d98f26c22e~300x300.image",
        time: res.msg[0].create_time,
      });
      console.log("formate_time",dayjs(res.msg[0].create_time).format("YYYY-MM-DD HH:mm:ss"));
    }
    return;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="editor-container">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
          src={<Image src={personInfo.avatar} />}
        />
        {personInfo.username + `${sendTip().tip}`}
        <div>
          <ul>
            <li>芭蕉</li>
            <li>添加</li>
            <li>信息</li>
            <li>通知</li>
            <li>账户</li>
          </ul>
        </div>
      </div>
    </>
  );
}
