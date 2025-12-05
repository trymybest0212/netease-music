import { NavLink } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style.js";
import { headerLinks } from "./const.js";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default function Header() {
  // const getSelectItem = (item,index) => {
  //   if(index < 3) {
  //     return (
  //         <NavLink to={item.link} exact>
  //           {item.title}
  //           <i className="sprite_01 icon"></i>
  //           </NavLink>
  //     )
  //   }else {
  //     return (
  //       <a href={item.link}>{item.title}</a>
  //     )
  //   }
  // }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {index < 3 ? (
                    <NavLink to={item.link} exact>
                      {item.title}
                      <i className="sprite_01 icon"></i>
                    </NavLink>
                  ) : (
                    <a href={item.link}>{item.title}</a>
                  )}
                  {/* {getSelectItem(item,index)} */}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}
