import React from "react";
import {
    CommentOutlined,
    RetweetOutlined,
    HeartOutlined,
    UploadOutlined
} from "@ant-design/icons";


const Footer = (props) => {
  const { comment, retweetCount, likCount } = props;
  const commentCount = comment.length;
  return (
    <>
      <div>
        <CommentOutlined className="item-icon" />
        <span>{commentCount}</span>
      </div>
      <div>
        <RetweetOutlined className="item-icon item-retweet" />
        <span>{retweetCount}</span>
      </div>
      <div>
        <HeartOutlined className="item-icon item-heart" />
        <span>{likCount}</span>
      </div>
      <UploadOutlined className="item-icon" />
    </>
  );
};
export default Footer