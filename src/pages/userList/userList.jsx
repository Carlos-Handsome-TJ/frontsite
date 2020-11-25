import React, { useEffect } from "react";
import "./userList.css";
// import { apiGetData } from "../../Api/api";
// import axios from "axios";
// import {Redirect, Route, Link, useHistory } from 'react-router-dom'

export default function UserList() {
  useEffect(() => {
    // async function getData() {
    //   const res = await apiGetData();
    //   console.log(222, res);
    // }
    // getData();
    // axios.get('/list/userList')
    // .then(res => {
    //     console.log(res);
    // }).catch(e => console.log(e))
  }, []);

  return (
    <>  
      <div className="user-box">
        <div className="user-left">1</div>
        <div className="user-content">
          <button>返回登录页面</button>
        </div>
        <div className="user-right">3</div>
      </div>
    </>
  );
}
