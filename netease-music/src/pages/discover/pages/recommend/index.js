import { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./components/top-banner";
import HotRecommend from "./components/hot-recommend";
import NewAlbum from "./components/new-album";
import RecommendRanking from "./components/recommend-ranking";

// 使用hooks
function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}
export default memo(Recommend);
