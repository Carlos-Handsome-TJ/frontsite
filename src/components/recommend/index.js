import React, { useEffect, useState } from "react"
import axios from "axios"
import _ from "lodash"
import UserInfo from "../common/user"
import TimeInfo from "../common/time"
import ContentArea from "../common/content"
import ImageArea from "../common/images"
import Footer from "../common/footer"
import "./index.css"


/**
 * 推荐栏组件：
 */
export default function Recommend() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios.get("/list/articles").then((data) => {
      console.log(data.data);
      if (data) {
        console.log(data.data);
        setContent(data.data || []);
      }
      return;
    });
  }, []);
  return (
    <>
      {_.map(content, (item, index) => {
        return (
          <div className="articles-item">
            <div className="item-left">
              {
                <UserInfo
                  key={index}
                  src={item.avatar}
                  username={item.author}
                  attention={item.attention}
                  followers={item.follower}
                />
              }
            </div>
            <div className="item-right">
              <div className="item-header">
                {
                  <TimeInfo
                    key={index}
                    username={item.createTime}
                    createTime={item.createTime}
                  />
                }
              </div>
              <div className="item-content">
                <div className="item-content-area">
                  {<ContentArea key={index} content={item.content} />}
                </div>
                <div className="item-content-image">
                  {<ImageArea key={index} src={item.images} />}
                </div>
              </div>
              <div className="item-footer">
                {
                  <Footer
                    key={index}
                    comment={item.comment}
                    retweetCount={item.retweet}
                    likCount={item.like}
                  />
                }
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
