import  { memo } from "react";

import { hotRadios } from "./const";

import RecommendRightHead from "@/pages/components/recommend-right-head";
import { HotRadioWrapper } from "./style";

export default memo(function HotAnchor() {
  return (
    <HotRadioWrapper>
      <RecommendRightHead title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
