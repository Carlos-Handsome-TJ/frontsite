import React, { useEffect, useState } from "react"
import _ from "lodash"
import { apiGetData } from "../../Api/api"
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
    const getRecommendData = async () => {
      const data = await apiGetData();
      if (data.length) {
        setContent(data);
      }
      return;
    };
    getRecommendData();
  }, []);
  return (
    <>
      <ul className="recommend-list">
        {_.map(content, (item, index) => {
          return (
            <li className="articles-item" key={index}>
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
                      username={item.author}
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
            </li>
          );
        })}
      </ul>
    </>
  );
}
