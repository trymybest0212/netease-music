import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RecommendWrapper } from "./style";
import { getRecommendHotActions } from "@/store/recommend-store/actionCreator";

import ThemeHeaderRecommend from "@/pages/components/theme-header-recommend";
import SongCover from "@/pages/components/song-cover";

export default function HotRecommend() {
  const dispatch = useDispatch();
  const { recommendHot } = useSelector(
    (state) => ({
      recommendHot: state.getIn(["recommend", "recommendHot"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getRecommendHotActions());
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <ThemeHeaderRecommend
        title="热门推荐"
        keyword={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></ThemeHeaderRecommend>
      <div className="recommend-list">
        {recommendHot.map((item) => {
          return <SongCover info={item} key={item.id}></SongCover>;
        })}
      </div>
    </RecommendWrapper>
  );
}
