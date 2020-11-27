import React, { useEffect, useState } from "react"
import axios from "axios"
import { Avatar, Image } from 'antd';
import { UserOutlined, EllipsisOutlined } from '@ant-design/icons';
import "./index.css"

export default function Recommend() {
    const [content, setContent] = useState([])
    useEffect(() => {
        axios.get("/list/articles")
            .then(data => {
                console.log(data)
                setContent(data)
            })
    }, [])
    return (
        <>
            <div className="articles-item">
                <div className="item-left">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </div>
                <div className="item-right">
                    <div className="item-header">
                        <span>username</span>
                        <span>2小时前</span>
                        <EllipsisOutlined className="item-setting"/>
                    </div>
                    <div className="item-content">
                        在前文中我们讲过：共识算法通常基于状态复制机
                        （Replicated State Machine）模型，所有节点从
                        同一个 state 出发，经过一系列同样操作 log 的步骤，
                        最终也必将达到一致的 state。也就是说，只要我们保
                        证集群中所有节点的 log 一致那么经过一系列追加操
                        作（apply）后最终得到的状态机也就是一致的。
                    </div>
                    <div className="item-footer">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
