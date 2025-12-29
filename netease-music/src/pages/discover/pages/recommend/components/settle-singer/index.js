import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSettleSingersAction } from "@/store/recommend-store/actionCreator";
import { getSizeImage } from "@/utils/format-utils";

import RecommendRightHead from "@/pages/components/recommend-right-head";
import { SetterSongerWrapper } from "./style";

export default memo(function HYSettleSinger() {
  // redux
  const dispatch = useDispatch();
  const { settleSings } = useSelector(
    (state) => ({
      settleSings: state.getIn(["recommend", "settleSings"]),
    }),
    shallowEqual
  );

  // hooks
  useEffect(() => {
    dispatch(getSettleSingersAction());
  }, [dispatch]);

  return (
    <SetterSongerWrapper>
      <RecommendRightHead title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSings.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  );
});
